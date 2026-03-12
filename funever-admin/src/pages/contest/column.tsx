import { Button } from '@mui/material';
import { AdminGameContestPage } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';

export const useColumn = ({
  openEditDialog,
  openDeleteDialog,
}: {
  openEditDialog: (row: AdminGameContestPage) => void;
  openDeleteDialog: (row: AdminGameContestPage) => void;
}) => {
  const column = [
    { headerName: '赛事名称', field: 'name', minWidth: 120 },
    { headerName: '赛事简介', field: 'intro', minWidth: 300 },
    { headerName: '所属游戏', field: 'gameName' },
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
      cellRenderer: ({ data: row }: { data: AdminGameContestPage }) => (
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
