import React, { useState } from 'react';
import Title from 'components/Title';
import AgCommonTable from 'components/ag-table/common';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { AdminClientUser } from 'api/model';
import QueryForm from '../components/query-form';
import { useColumn } from './column';
import { ClientUserModel } from '../model';
import FriendDialog from '../friend/index';

const RootPage = () => {
  const [openFriend, setOpenFriend] = useState(false);
  const [currentData, setCurrent] = useState<AdminClientUser>();
  const { clientUserList, total, isLoading, pageNum, pageSize, refetch } =
    ClientUserModel.useClientUserList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });

  const openFriendDialog = (row?: AdminClientUser) => {
    setOpenFriend(true);
    setCurrent(row);
  };

  const { column } = useColumn({
    openFriendDialog,
  });
  return (
    <div>
      <Title title="用户列表" />
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={clientUserList}
        total={total}
        refetch={handleChangePage}
        paga={{
          pageNum,
          pageSize,
        }}
      >
        <QueryForm refetch={handleSearch} />
      </AgCommonTable>
      {openFriend && (
        <FriendDialog
          open={openFriend}
          onClose={() => setOpenFriend(false)}
          uid={currentData?.uid}
        />
      )}
    </div>
  );
};

export default RootPage;
