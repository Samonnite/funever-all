import { Button } from '@mui/material';
import { ConfigPoint } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: ConfigPoint) => void }) => {
  const column = [
    {
      headerName: '积分类型',
      field: 'typeText',
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
      cellRenderer: ({ data: row }: { data: ConfigPoint }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
