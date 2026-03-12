import { Button } from '@mui/material';
import { ValueFormatterParams } from 'ag-grid-community';
import { ConfigTask } from 'api/model';
import { BooleanCellValue, DateTimeFormatter } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({
  openEditDialog,
  openDeleteDialog,
}: {
  openEditDialog: (row: ConfigTask) => void;
  openDeleteDialog: (row: ConfigTask) => void;
}) => {
  const column = [
    {
      headerName: '任务名称',
      field: 'taskName',
    },
    {
      headerName: '任务图标',
      field: 'taskLogo',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: ConfigTask }) => {
        const { taskLogo } = row;
        return <LightboxImg src={[taskLogo!]} sx={{ width: 40, height: 40 }} />;
      },
    },
    {
      headerName: '任务目标',
      field: 'taskTarget',
      minWidth: 200,
    },
    {
      headerName: '任务类型',
      field: 'taskType',
      valueFormatter: (params: ValueFormatterParams) =>
        params?.value === 'invite' ? '邀请好友' : '跳转链接',
    },
    {
      headerName: '每日重复',
      field: 'dayRepeat',
      ...BooleanCellValue,
    },
    {
      headerName: '延迟分钟',
      field: 'minDelay',
    },
    {
      headerName: '	奖励金币',
      field: 'rewardCoin',
    },
    {
      headerName: '奖励积分',
      field: 'rewardPoint',
    },
    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '更新时间',
      field: 'updateTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '操作',
      minWidth: 240,
      field: 'id',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: ConfigTask }) => (
        <>
          <Button onClick={() => openEditDialog(row)}>编辑</Button>
          <Button onClick={() => openDeleteDialog(row)}>删除</Button>
        </>
      ),
    },
  ];
  return {
    column,
  };
};
