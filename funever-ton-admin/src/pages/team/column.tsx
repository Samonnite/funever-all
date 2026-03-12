import { Button } from '@mui/material';
import { GameTeam } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: GameTeam) => void }) => {
  const column = [
    { headerName: '战队名称', field: 'name', minWidth: 160 },
    { headerName: '战队简介', field: 'intro', minWidth: 300 },
    {
      headerName: '	战队图标',
      field: 'logo',
      minWidth: 100,
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: GameTeam }) => {
        const { logo } = row;
        return <LightboxImg src={[logo!]} sx={{ width: 40, height: 40, borderRadius: '50%' }} />;
      },
    },
    { headerName: '所属游戏', field: 'gameName' },
    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '操作',
      minWidth: 280,
      field: 'id',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: GameTeam }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
