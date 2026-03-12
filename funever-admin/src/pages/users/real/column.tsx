import { Button } from '@mui/material';
import { UserClient } from 'api/model';
import { TypeListTextObjCellValue, DateTimeFormatter } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({ openEditDialog }: { openEditDialog: (row: UserClient) => void }) => {
  const column = [
    { headerName: '账号ID', field: 'uid', minWidth: 120 },
    { headerName: '钱包主地址', field: 'addr', minWidth: 400 },
    { headerName: '名称', field: 'name', minWidth: 120 },
    {
      headerName: '头像',
      field: 'unn',
      minWidth: 270,
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: UserClient }) => {
        const { logo } = row;
        return <LightboxImg src={[logo!]} sx={{ width: 40, height: 40, borderRadius: '50%' }} />;
      },
    },
    { headerName: '用户类型', field: 'type', ...TypeListTextObjCellValue },
    { headerName: '邀请码', field: 'ucode', minWidth: 120 },
    {
      headerName: '上次登录时间',
      field: 'loginTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '注册时间',
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
      cellRenderer: ({ data: row }: { data: UserClient }) => (
        <Button onClick={() => openEditDialog(row)}>编辑</Button>
      ),
    },
  ];
  return {
    column,
  };
};
