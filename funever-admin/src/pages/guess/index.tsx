import React, { useState } from 'react';
import Title from 'components/Title';
import { AdminGuessPage } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { Button } from '@mui/material';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { GuessModel } from './model';
import EditDialog from './components/edit-dialog';
import AddDialog from './components/add-dialog';
import DeleteDialog from './components/delete-dialog';
import UserDialog from './user';
import BlockDialog from './block';

const RealUserList = () => {
  const { guessList, total, isLoading, pageNum, pageSize, refetch } = GuessModel.useGuessList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);
  const [currentData, setCurrent] = useState<AdminGuessPage>();

  const openAddDialog = (row: AdminGuessPage) => {
    setCurrent(row);
    setOpenAdd(true);
  };

  const openDeleteDialog = (row: AdminGuessPage) => {
    setCurrent(row);
    setOpenDelete(true);
  };

  const openEditDialog = (row: AdminGuessPage) => {
    setCurrent(row);
    setOpen(true);
  };

  const openUserDialog = (row: AdminGuessPage) => {
    setCurrent(row);
    setOpenUser(true);
  };

  const openBlockDialog = (row: AdminGuessPage) => {
    setCurrent(row);
    setOpenBlock(true);
  };

  const extraContextMenuItems = (params: GetContextMenuItemsParams) => {
    const result = [
      {
        name: '竞猜编辑',
        action: () => {
          openAddDialog(params.node?.data);
        },
      },
      'separator',
      {
        name: '竞猜结算',
        action: () => {
          openEditDialog(params.node?.data);
        },
        disabled:
          params.node?.data?.status === 'settlement' || params.node?.data?.status === 'completed',
      },
      'separator',
      {
        name: '投注查询',
        action: () => {
          openUserDialog(params.node?.data);
        },
      },
      'separator',
      {
        name: '转账记录',
        action: () => {
          openBlockDialog(params.node?.data);
        },
        disabled: params.node?.data?.status !== 'completed',
      },
      'separator',
      {
        name: '竞猜删除',
        action: () => {
          openDeleteDialog(params.node?.data);
        },
        disabled:
          Number(params.node?.data?.ateam?.teamCount) +
            Number(params.node?.data?.bteam?.teamCount) >
          0,
      },
      'separator',
    ];

    return result;
  };

  const { column } = useColumn({
    openAddDialog,
    openEditDialog,
    openUserDialog,
    openBlockDialog,
    openDeleteDialog,
  });
  return (
    <div>
      <Title
        title="竞猜列表"
        action={
          <Button
            variant="contained"
            onClick={() => {
              setCurrent(undefined);
              setOpenAdd(true);
            }}
          >
            添加竞猜
          </Button>
        }
      />
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={guessList}
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
      {openAdd && <AddDialog open={openAdd} onClose={() => setOpenAdd(false)} data={currentData} />}
      {openDelete && (
        <DeleteDialog
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          data={currentData?.id as number}
        />
      )}
      {openUser && (
        <UserDialog
          open={openUser}
          onClose={() => setOpenUser(false)}
          data={currentData?.id as number}
        />
      )}
      {openBlock && (
        <BlockDialog
          open={openBlock}
          onClose={() => setOpenBlock(false)}
          data={currentData?.id as number}
        />
      )}
    </div>
  );
};

export default RealUserList;
