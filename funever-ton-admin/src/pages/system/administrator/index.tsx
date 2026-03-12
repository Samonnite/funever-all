import React, { useState, useRef } from 'react';
import Title from 'components/Title';
import { Button } from '@mui/material';

import { AdminUser } from 'api/model';
import RoleBasedGuard from 'auth/RoleBasedGuard';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import QueryForm from './query-form';
import { useColumn } from './column';
import AdminDialog from './admin-dialog';

import { AdministratorModel } from '../model/administrator';
import UnbindDialog from './unbind-dialog';
import BindDialog from './bind-dialog';

const Administrator = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openUnbind, setOpenUnbind] = useState(false);
  const [openBind, setOpenBind] = useState(false);
  const [currentData, setCurrent] = useState<AdminUser>();
  const { refetch, adminList, total, pageNum, pageSize, isLoading } =
    AdministratorModel.useAdminQuery();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });

  const openEditDialog = (row?: AdminUser) => {
    setCurrent(row);
    setOpenEdit(true);
  };

  const openUnbindDialog = (row: AdminUser) => {
    setOpenUnbind(true);
    setCurrent(row);
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
      {
        name: '解除谷歌绑定',
        action: () => {
          openUnbindDialog(params.node?.data);
        },
        disabled: !params.node?.data,
      },
      'separator',
    ];

    return result;
  };

  const { column } = useColumn({
    openEditDialog,
    openUnbindDialog,
  });
  return (
    <RoleBasedGuard hasContent>
      <Title
        title="管理员账号"
        action={
          <Button
            variant="contained"
            sx={{
              mr: 1,
            }}
            onClick={() => {
              setCurrent(undefined);
              openEditDialog();
            }}
          >
            添加管理员
          </Button>
        }
      />
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={adminList}
        total={total}
        extraContextMenuItems={extraContextMenuItems}
        refetch={handleChangePage}
        paga={{
          pageNum,
          pageSize,
        }}
      >
        <QueryForm refetch={handleSearch} />
      </AgCommonTable>
      {openEdit && (
        <AdminDialog open={openEdit} onClose={() => setOpenEdit(false)} data={currentData} />
      )}
      {openUnbind && (
        <UnbindDialog open={openUnbind} onClose={() => setOpenUnbind(false)} data={currentData} />
      )}
      {openBind && <BindDialog open={openBind} onClose={() => setOpenBind(false)} />}
    </RoleBasedGuard>
  );
};

export default Administrator;
