import { Button } from '@mui/material';
import { Game } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({
  openEditDialog,
  openDeleteDialog,
}: {
  openEditDialog: (row: Game) => void;
  openDeleteDialog: (row: Game) => void;
}) => {
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
    { headerName: '游戏标签', field: 'mates.tags' },
    {
      headerName: '画册列表',
      field: 'mates.banner',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: Game }) => {
        const { mates } = row;
        return (
          <LightboxImg
            src={mates?.banner || []}
            sx={{ width: 40, height: 40, borderRadius: '50%' }}
          />
        );
      },
    },
    { headerName: '搜索权重', field: 'click' },
    { headerName: '热度权重', field: 'rank' },
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
        <>
          <Button onClick={() => openEditDialog(row)}>编辑</Button>
          <Button onClick={() => openDeleteDialog(row)}>删除</Button>
        </>
      ),
    },
  ];
  return {
    column,
  };
};
