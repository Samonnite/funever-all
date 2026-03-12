import { Button } from '@mui/material';
import { ConfigSign } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: ConfigSign) => void }) => {
  const column = [
    {
      headerName: '奖励天数',
      field: 'day',
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
      cellRenderer: ({ data: row }: { data: ConfigSign }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
