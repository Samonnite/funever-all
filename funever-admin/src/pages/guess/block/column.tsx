import { Button } from '@mui/material';
import { CellClickedEvent } from 'ag-grid-community';
import { GameGuessBlock } from 'api/model';
import {
  DateTimeFormatter,
  HashLinkRender,
  UerTransferTextObjCellValue,
} from 'components/cellRender';

export const useColumn = ({ openDialog }: { openDialog: (row: GameGuessBlock) => void }) => {
  const column = [
    {
      headerName: '转账用户',
      field: 'uid',
      minWidth: 140,
      cellStyle: { color: '#46e372', cursor: 'pointer' },
      cellRenderer: 'agGroupCellRenderer',
      valueFormatter: () => `转账用户`,
      onCellClicked: (event: CellClickedEvent) => {
        const isExpanded = event.node.expanded;
        event.api.setRowNodeExpanded(event.node, !isExpanded);
      },
    },
    { headerName: '转账哈希', field: 'hash', minWidth: 150, cellRenderer: HashLinkRender },
    { headerName: '链上状态', field: 'status', ...UerTransferTextObjCellValue },
    { headerName: '转账总笔数', field: 'tranCount', minWidth: 120 },
    { headerName: '转账总金额', field: 'tranAmount', minWidth: 120 },
    { headerName: '转出地址', field: 'tranUser.fromOwner', minWidth: 400 },
    { headerName: '币种名称', field: 'tranUser.coin' },
    { headerName: '链上异常信息', field: 'error', minWidth: 200 },
    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '操作',
      field: 'id',
      filter: false,
      sortable: false,
      pinned: 'right' as any,
      cellRenderer: ({ data: row }: { data: GameGuessBlock }) => (
        <Button onClick={() => openDialog(row)} disabled={row?.status !== 'fail'}>
          转账重试
        </Button>
      ),
    },
  ];
  return {
    column,
  };
};
