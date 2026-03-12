import { DateTimeFormatter } from 'components/cellRender';

export const useColumn = () => {
  const column = [
    { headerName: '用户ID', field: 'uid', minWidth: 120 },
    { headerName: '钱包类型', field: 'typeText', minWidth: 120 },
    { headerName: '业务类型', field: 'billText', minWidth: 120 },
    { headerName: '发生金额', field: 'qty', minWidth: 130 },
    { headerName: '历史备注', field: 'remark', minWidth: 200 },
    { headerName: '后台备注', field: 'comment', minWidth: 130 },
    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
  ];
  return {
    column,
  };
};
