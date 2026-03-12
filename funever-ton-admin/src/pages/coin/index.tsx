import React, { useState } from 'react';
import Title from 'components/Title';
import { TonCoin } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { Button } from '@mui/material';
import { useColumn } from './column';
import { CoinModel } from './model';
import EditDialog from './components/edit-dialog';

const CoinList = () => {
  const { coinList, isFetching } = CoinModel.useCoinList();
  const [open, setOpen] = useState(false);
  const [currentData, setCurrent] = useState<TonCoin>();

  const openEditDialog = (row: TonCoin) => {
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
        loading={isFetching}
        columnDefs={column}
        rowData={coinList}
        total={coinList?.length}
        masterDetail
        detailRowHeight={500}
        extraContextMenuItems={extraContextMenuItems}
      />
      {open && <EditDialog open={open} onClose={() => setOpen(false)} data={currentData} />}
    </div>
  );
};

export default CoinList;
