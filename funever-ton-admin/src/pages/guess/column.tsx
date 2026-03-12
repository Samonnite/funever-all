import { Button } from '@mui/material';
import { ValueFormatterParams } from 'ag-grid-community';
import { AdminGameMatch } from 'api/model';
import { DateTimeFormatter, GuessStatusTextCellValue } from 'components/cellRender';

export const useColumn = ({
  openAddDialog,
  openEditDialog,
  openUserDialog,
  openDeleteDialog,
}: {
  openAddDialog: (row: AdminGameMatch) => void;
  openEditDialog: (row: AdminGameMatch) => void;
  openUserDialog: (row: AdminGameMatch) => void;
  openDeleteDialog: (row: AdminGameMatch) => void;
}) => {
  const column = [
    { headerName: '竞猜ID', field: 'id', minWidth: 100 },
    { headerName: '热议标题', field: 'topic', minWidth: 150 },
    { headerName: '游戏名称', field: 'game', minWidth: 120 },
    { headerName: '游戏赛事', field: 'contest', minWidth: 150 },
    { headerName: '最小押注量', field: 'min' },
    { headerName: '竞猜状态', field: 'status', ...GuessStatusTextCellValue },
    {
      headerName: 'A战队名称',
      field: 'ateam.name',
    },
    {
      headerName: 'A战队押注人数',
      field: 'ateam.count',
      minWidth: 140,
    },
    {
      headerName: 'A战队押注金额',
      field: 'ateam.amount',
      minWidth: 140,
    },
    {
      headerName: 'A战队比分',
      field: 'ateam.win',
      minWidth: 120,
    },
    {
      headerName: 'B战队名称',
      field: 'bteam.name',
    },
    {
      headerName: 'B战队押注人数',
      field: 'bteam.count',
      minWidth: 140,
    },
    {
      headerName: 'B战队押注金额',
      field: 'bteam.amount',
      minWidth: 140,
    },
    {
      headerName: 'B战队比分',
      field: 'bteam.win',
      minWidth: 120,
    },
    {
      headerName: '盈方战队',
      field: 'close.winTeam',
      valueFormatter: (params: ValueFormatterParams) => {
        if (params?.node?.data?.status !== 'completed') return '';
        const current =
          params?.node?.data?.ateam?.id === params?.value
            ? params?.node?.data?.ateam
            : params?.node?.data?.bteam;
        return current?.name || '';
      },
    },
    { headerName: '盈方总金额', field: 'close.winAmount' },
    { headerName: '败方总金额', field: 'close.lossAmount' },
    { headerName: '盈方单位分红', field: 'close.bonusAmount' },
    { headerName: '系统抽水', field: 'close.feeAmount' },
    {
      headerName: '游戏开始时间',
      field: 'startTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '押注结束时间',
      field: 'dueTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '结算时间',
      field: 'closeTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '操作',
      minWidth: 380,
      field: 'id',
      filter: false,
      sortable: false,
      pinned: 'right' as any,
      cellRenderer: ({ data: row }: { data: AdminGameMatch }) => (
        <>
          <Button onClick={() => openAddDialog(row)}>竞猜编辑</Button>
          <Button onClick={() => openEditDialog(row)} disabled={row?.status !== 'process'}>
            竞猜结算
          </Button>
          <Button onClick={() => openUserDialog(row)}>投注查询</Button>
          <Button
            onClick={() => openDeleteDialog(row)}
            disabled={Number(row?.ateam?.count) + Number(row?.bteam?.count) > 0}
          >
            竞猜删除
          </Button>
        </>
      ),
    },
  ];
  return {
    column,
  };
};
