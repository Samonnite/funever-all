import React, { useState } from 'react';
import AgCommonTable from 'components/ag-table/common';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { Dialog, DialogTitle, Grid } from '@mui/material';
import { useColumn } from './column';
import { ClientUserModel } from '../model';

const RootPage = ({ open, onClose, uid }: any) => {
  const { userFriendList, total, isLoading, pageNum, pageSize, refetch } =
    ClientUserModel.useQueryFriends();
  const { friendSummary } = ClientUserModel.useFriendSummary(uid);
  const { handleChangePage } = usePaginationAndSearch({
    refetch,
    defaultParams: {
      uid,
    },
  });

  const { column } = useColumn();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="好友查询"
      PaperProps={{
        sx: {
          width: '100%',
          minWidth: 1000,
          maxWidth: '78vw',
          '.ag-cell, .ag-full-width-row .ag-cell-wrapper.ag-row-group': {
            pr: 0,
          },
        },
      }}
    >
      <DialogTitle>
        <Grid container spacing={2}>
          <Grid item>好友查询</Grid>
          <Grid item>(用户ID: {friendSummary?.uid}</Grid>
          <Grid item>好友总数: {friendSummary?.count}</Grid>
          <Grid item>金币总数: {friendSummary?.coin}</Grid>
          <Grid item>积分总数: {friendSummary?.point})</Grid>
        </Grid>
      </DialogTitle>
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={userFriendList}
        total={total}
        refetch={handleChangePage}
        paga={{
          pageNum,
          pageSize,
        }}
      />
    </Dialog>
  );
};

export default RootPage;
