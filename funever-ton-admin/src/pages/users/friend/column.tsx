import { ValueFormatterParams } from 'ag-grid-community';
import { DateTimeFormatter } from 'components/cellRender';

export const useColumn = () => {
  const column = [
    { headerName: '账号ID', field: 'uid', minWidth: 120 },
    { headerName: '上级ID', field: 'fuid', minWidth: 120 },
    { headerName: '奖励金币', field: 'coin', minWidth: 120 },
    { headerName: '奖励积分', field: 'point', minWidth: 120 },
    {
      headerName: '是否奖励	',
      field: 'status',
      minWidth: 186,
      cellDataType: 'text',
      valueFormatter: (params: ValueFormatterParams) => (params.value ? '是' : '否'),
    },
    {
      headerName: '创建时间	',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
  ];
  return {
    column,
  };
};
