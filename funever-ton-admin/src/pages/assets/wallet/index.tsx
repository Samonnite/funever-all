import React, { useRef, useState } from 'react';
import Title from 'components/Title';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { WalletModel } from './model';
import EditDialog from './components/edit-dialog';

const RootPage = () => {
  const { walletList, total, isLoading, pageNum, pageSize, refetch } = WalletModel.useWalletList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });
  const [open, setOpen] = useState(false);
  const [currentData, setCurrent] = useState<any>();

  const openEditDialog = (row: any) => {
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

  const gridRef = useRef<any>();
  const selected = gridRef.current?.api?.getSelectedRows();

  const { column } = useColumn({
    openEditDialog,
  });
  return (
    <div>
      <Title title="用户钱包查询" />
      <AgCommonTable
        ref={gridRef}
        loading={isLoading}
        columnDefs={column}
        rowData={walletList}
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
      {open && <EditDialog open={open} onClose={() => setOpen(false)} data={currentData} />}
    </div>
  );
};

export default RootPage;
