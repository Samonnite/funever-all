import { CellClickedEvent, ValueFormatterParams } from 'ag-grid-community';
import { DateTimeFormatter, UserGuessQueryTextObjCellValue } from 'components/cellRender';

export const useColumn = (id?: string | null) => {
  const column = [
    { headerName: '竞猜ID', field: 'mid', minWidth: 120 },
    { headerName: '用户ID', field: 'uid', minWidth: 140 },
    { headerName: '盈利状态', field: 'status', ...UserGuessQueryTextObjCellValue },
    {
      headerName: '押注战队',
      field: 'teamName',
      valueFormatter: (params: ValueFormatterParams) => {
        const current =
          params?.node?.data?.ateam?.id === params?.value
            ? params?.node?.data?.ateam
            : params?.node?.data?.bteam;
        return current?.name || '';
      },
    },
    { headerName: '押注总金额', field: 'stake' },
    { headerName: '押注收益', field: 'profit' },
    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '结算时间',
      field: 'closeTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
  ];
  return {
    column,
  };
};
