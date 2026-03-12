import { Button } from '@mui/material';
import { AdminClientUser } from 'api/model';
import { DateTimeFormatter } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({
  openFriendDialog,
}: {
  openFriendDialog: (data?: AdminClientUser) => void;
}) => {
  const column = [
    { headerName: '账号ID', field: 'uid', minWidth: 120 },
    { headerName: 'Telegram ID', field: 'tuid', minWidth: 120 },
    { headerName: '名称', field: 'name', minWidth: 120 },
    {
      headerName: '	头像',
      field: 'photo',
      minWidth: 100,
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: AdminClientUser }) => {
        const { photo } = row;
        return <LightboxImg src={[photo!]} sx={{ width: 40, height: 40, borderRadius: '50%' }} />;
      },
    },
    { headerName: '邀请码', field: 'ucode', minWidth: 120 },
    {
      headerName: '上次登录时间',
      field: 'loginTime',
      minWidth: 186,
      valueFormatter: DateTimeFormatter,
    },
    {
      headerName: '竞猜时间',
      field: 'matchTime',
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
      field: 'id',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: AdminClientUser }) => (
        <Button onClick={() => openFriendDialog(row)}>好友查询</Button>
      ),
    },
  ];
  return {
    column,
  };
};
