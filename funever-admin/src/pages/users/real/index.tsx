import React, { useState } from 'react';
import Title from 'components/Title';
import { UserClient } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import QueryForm from '../components/query-form';
import { useColumn } from './column';
import { ClientUserModel } from '../model';
import EditDialog from '../components/edit-dialog';

const RealUserList = () => {
  const { clientUserList, total, isLoading, pageNum, pageSize, refetch } =
    ClientUserModel.useClientUserList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });
  const [open, setOpen] = useState(false);
  const [currentData, setCurrent] = useState<UserClient>();

  const openEditDialog = (row: UserClient) => {
    setCurrent(row);
    setOpen(true);
  };

  const extraContextMenuItems = (params: GetContextMenuItemsParams) => {
    const result = [
      {
        name: '编辑',
        action: () => {
          openEditDialog(params.node?.data);
        },
      },
      'separator',
    ];

    return result;
  };

  const { column } = useColumn({
    openEditDialog,
  });
  return (
    <div>
      <Title title="用户列表" />
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={clientUserList}
        total={total}
        masterDetail
        detailRowHeight={500}
        extraContextMenuItems={extraContextMenuItems}
        refetch={handleChangePage}
        paga={{
          pageNum,
          pageSize,
        }}
      >
        <QueryForm refetch={handleSearch} />
      </AgCommonTable>
      {open && <EditDialog open={open} onClose={() => setOpen(false)} data={currentData} />}
    </div>
  );
};

export default RealUserList;
