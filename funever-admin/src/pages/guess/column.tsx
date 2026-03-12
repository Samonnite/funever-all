import { Button } from '@mui/material';
import { ValueFormatterParams } from 'ag-grid-community';
import { AdminGuessPage } from 'api/model';
import {
  BlockOkTextObjCellValue,
  DateTimeFormatter,
  GuessStatusTextCellValue,
} from 'components/cellRender';

export const useColumn = ({
  openAddDialog,
  openEditDialog,
  openUserDialog,
  openBlockDialog,
  openDeleteDialog,
}: {
  openAddDialog: (row: AdminGuessPage) => void;
  openEditDialog: (row: AdminGuessPage) => void;
  openUserDialog: (row: AdminGuessPage) => void;
  openBlockDialog: (row: AdminGuessPage) => void;
  openDeleteDialog: (row: AdminGuessPage) => void;
}) => {
  const column = [
    { headerName: '竞猜ID', field: 'id', minWidth: 100 },
    { headerName: '热议标题', field: 'title', minWidth: 150 },
    { headerName: '游戏名称', field: 'game', minWidth: 120 },
    { headerName: '游戏赛事', field: 'contest', minWidth: 150 },
    { headerName: '币种', field: 'coin' },
    { headerName: '最小押注量', field: 'coinMin' },
    { headerName: '链上状态', field: 'blockOk', ...BlockOkTextObjCellValue },
    { headerName: '竞猜状态', field: 'status', ...GuessStatusTextCellValue },
    {
      headerName: 'A战队名称',
      field: 'ateam.teamName',
    },
    {
      headerName: 'A战队押注人数',
      field: 'ateam.teamCount',
      minWidth: 140,
    },
    {
      headerName: 'A战队押注金额',
      field: 'ateam.teamAmount',
      minWidth: 140,
    },
    {
      headerName: 'A战队比分',
      field: 'ateam.teamWin',
      minWidth: 120,
    },
    {
      headerName: 'B战队名称',
      field: 'bteam.teamName',
    },
    {
      headerName: 'B战队押注人数',
      field: 'bteam.teamCount',
      minWidth: 140,
    },
    {
      headerName: 'B战队押注金额',
      field: 'bteam.teamAmount',
      minWidth: 140,
    },
    {
      headerName: 'B战队比分',
      field: 'bteam.teamWin',
      minWidth: 120,
    },
    {
      headerName: '盈方战队',
      field: 'winTeam',
      valueFormatter: (params: ValueFormatterParams) => {
        if (
          params?.node?.data?.status !== 'settlement' &&
          params?.node?.data?.status !== 'completed'
        )
          return '';
        const current =
          params?.node?.data?.ateam?.team === params?.value
            ? params?.node?.data?.ateam
            : params?.node?.data?.bteam;
        return current?.teamName || '';
      },
    },
    { headerName: '盈方总金额', field: 'winAmount' },
    { headerName: '败方总金额', field: 'lossAmount' },
    { headerName: '盈方单位分红', field: 'bonusAmount' },
    { headerName: '系统抽水', field: 'feeAmount' },
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
      cellRenderer: ({ data: row }: { data: AdminGuessPage }) => (
        <>
          <Button onClick={() => openAddDialog(row)}>竞猜编辑</Button>
          <Button onClick={() => openEditDialog(row)} disabled={row?.status !== 'process'}>
            竞猜结算
          </Button>
          <Button onClick={() => openUserDialog(row)}>投注查询</Button>
          <Button onClick={() => openBlockDialog(row)} disabled={row?.status !== 'completed'}>
            转账记录
          </Button>
          <Button
            onClick={() => openDeleteDialog(row)}
            disabled={Number(row?.ateam?.teamCount) + Number(row?.bteam?.teamCount) > 0}
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
