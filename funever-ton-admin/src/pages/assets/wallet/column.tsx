import { Button } from '@mui/material';
import { ValueFormatterParams } from 'ag-grid-community';
import { Game } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';
import { walletTypeObj } from 'model/common';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: Game) => void }) => {
  const column = [
    { headerName: '用户ID', field: 'uid', minWidth: 120 },
    {
      headerName: '钱包类型',
      field: 'type',
      minWidth: 120,
      valueFormatter: (params: ValueFormatterParams) =>
        params.value ? walletTypeObj[params.value] : '',
    },
    { headerName: '可用余额', field: 'balance', minWidth: 130 },
    { headerName: '累计划入数量', field: 'transferIn', minWidth: 130 },
    { headerName: '累计划出数量', field: 'transferOut', minWidth: 130 },

    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '操作',
      minWidth: 240,
      field: 'id',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: Game }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
