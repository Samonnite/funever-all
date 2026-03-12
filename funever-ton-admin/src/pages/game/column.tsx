import { Button } from '@mui/material';
import { Game } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: Game) => void }) => {
  const column = [
    { headerName: '游戏名称', field: 'name', minWidth: 120 },
    { headerName: '游戏简介', field: 'intro', minWidth: 300 },
    {
      headerName: '	游戏图标',
      field: 'logo',
      minWidth: 270,
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: Game }) => {
        const { logo } = row;
        return <LightboxImg src={[logo!]} sx={{ width: 40, height: 40, borderRadius: '50%' }} />;
      },
    },
    { headerName: '游戏排序', field: 'sorted' },
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
      cellRenderer: ({ data: row }: { data: Game }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
