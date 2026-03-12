import { Button } from '@mui/material';
import { AdminUser } from 'api/model';
import {
  DateTimeFormatter,
  StatusCellValue,
  AdminTypeListTextObjCellValue,
} from 'components/cellRender';

export const useColumn = ({
  openEditDialog,
  openUnbindDialog,
}: {
  openEditDialog: (row: AdminUser) => void;
  openUnbindDialog: (row: AdminUser) => void;
}) => {
  const column = [
    { headerName: 'ID', field: 'uid' },
    { headerName: '管理员账号', field: 'account' },
    { headerName: '管理员姓名', field: 'name' },
    {
      headerName: '管理员角色',
      field: 'userAdmin',
      minWidth: 120,
      ...AdminTypeListTextObjCellValue,
    },
    {
      headerName: '创建时间',
      field: 'createTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '最后登录时间',
      field: 'loginTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    { headerName: '启用状态', field: 'userEnable', minWidth: 120, ...StatusCellValue },
    {
      headerName: '操作',
      minWidth: 340,
      field: 'id',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: AdminUser }) => (
        <>
          <Button onClick={() => openEditDialog(row)}>编辑</Button>
          <Button onClick={() => openUnbindDialog(row)}>解除谷歌绑定</Button>
        </>
      ),
    },
  ];
  return {
    column,
  };
};
