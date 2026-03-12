import { CellClickedEvent } from 'ag-grid-community';
import { DateTimeFormatter, UserGuessQueryTextObjCellValue } from 'components/cellRender';

export const useColumn = (id?: string | null) => {
  const column = [
    {
      headerName: '转账记录',
      field: 'uid',
      minWidth: 130,
      cellStyle: { color: '#46e372', cursor: 'pointer' },
      cellRenderer: 'agGroupCellRenderer',
      valueFormatter: () => `转账记录`,
      onCellClicked: (event: CellClickedEvent) => {
        const isExpanded = event.node.expanded;
        event.api.setRowNodeExpanded(event.node, !isExpanded);
      },
    },
    { headerName: '竞猜ID', field: 'addr', minWidth: 100, valueFormatter: () => id || '' },
    { headerName: '用户地址', field: 'addr', minWidth: 400 },
    { headerName: '盈利状态', field: 'status', ...UserGuessQueryTextObjCellValue },
    { headerName: '竞猜币种', field: 'coin', minWidth: 120 },
    { headerName: '押注战队', field: 'teamName' },
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
