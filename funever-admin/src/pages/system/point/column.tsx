import { Button } from '@mui/material';
import { ValueFormatterParams } from 'ag-grid-community';
import { PointConf } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';
import { pointTypeText } from 'model/common';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: PointConf) => void }) => {
  const column = [
    {
      headerName: '积分类型',
      field: 'type',
      valueFormatter: (params: ValueFormatterParams) =>
        pointTypeText[params?.value as keyof typeof pointTypeText],
    },
    {
      headerName: '奖励积分',
      field: 'point',
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
      cellRenderer: ({ data: row }: { data: PointConf }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
