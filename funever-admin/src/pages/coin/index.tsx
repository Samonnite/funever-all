import React, { useState } from 'react';
import Title from 'components/Title';
import { BlockCoin } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { Button } from '@mui/material';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { CoinModel } from './model';
import EditDialog from './components/edit-dialog';

const CoinList = () => {
  const { coinList, total, isLoading, pageNum, pageSize, refetch } = CoinModel.useCoinList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });
  const [open, setOpen] = useState(false);
  const [currentData, setCurrent] = useState<BlockCoin>();

  const openEditDialog = (row: BlockCoin) => {
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
      <Title
        title="币种管理"
        action={
          <Button
            variant="contained"
            onClick={() => {
              setCurrent(undefined);
              setOpen(true);
            }}
          >
            添加币种
          </Button>
        }
      />
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={coinList}
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

export default CoinList;
