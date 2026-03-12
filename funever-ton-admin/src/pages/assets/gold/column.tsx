import { DateTimeFormatter, GoldStatusObjTextObjCellValue } from 'components/cellRender';

export const useColumn = () => {
  const column = [
    { headerName: '用户ID', field: 'uid', minWidth: 120 },
    { headerName: '备注Id', field: 'mid', minWidth: 120 },
    { headerName: '币种', field: 'coin', minWidth: 120 },
    { headerName: '小数位', field: 'decimals', minWidth: 120 },
    { headerName: '兑换汇率', field: 'ratio', minWidth: 120 },
    { headerName: '支付金额', field: 'qty', minWidth: 130 },
    { headerName: '到账金币', field: 'arrive', minWidth: 120 },
    {
      headerName: '转出地址',
      field: 'from',
      minWidth: 200,
      cellRenderer: ({ value }: { value: string }) => {
        if (!value) return '';
        return (
          <a href={`https://tonscan.org/address/${value}`} target="_blank" rel="noreferrer">
            {`${value?.slice(0, 8)}...${value?.slice(-8)}`}
          </a>
        );
      },
    },
    {
      headerName: '转入地址',
      field: 'to',
      minWidth: 200,
      cellRenderer: ({ value }: { value: string }) => {
        if (!value) return '';
        return (
          <a href={`https://tonscan.org/address/${value}`} target="_blank" rel="noreferrer">
            {`${value?.slice(0, 8)}...${value?.slice(-8)}`}
          </a>
        );
      },
    },
    {
      headerName: '哈希',
      field: 'hash',
      minWidth: 200,
      cellRenderer: ({ value }: { value: string }) => {
        if (!value) return '';
        return (
          <a href={`https://tonscan.org/tx/${value}`} target="_blank" rel="noreferrer">
            {`${value?.slice(0, 8)}...${value?.slice(-8)}`}
          </a>
        );
      },
    },
    { headerName: '充值状态', field: 'status', minWidth: 120, ...GoldStatusObjTextObjCellValue },
    { headerName: '异常信息', field: 'error' },
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
