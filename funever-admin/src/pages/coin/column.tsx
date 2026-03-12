import { Button } from '@mui/material';
import { BlockCoin } from 'api/model';
import { DateTimeFormatter, StatusCellValue } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: BlockCoin) => void }) => {
  const column = [
    { headerName: '币种符号', field: 'coin', minWidth: 120 },
    { headerName: '币种合约信息', field: 'mint', minWidth: 400 },
    {
      headerName: '	币种图标',
      field: 'logo',
      minWidth: 270,
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: BlockCoin }) => {
        const { logo } = row;
        return <LightboxImg src={[logo!]} sx={{ width: 40, height: 40, borderRadius: '50%' }} />;
      },
    },
    { headerName: '启用状态', field: 'enable', minWidth: 120, ...StatusCellValue },
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
      cellRenderer: ({ data: row }: { data: BlockCoin }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
