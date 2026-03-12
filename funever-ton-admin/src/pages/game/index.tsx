import React, { useRef, useState } from 'react';
import Title from 'components/Title';
import { Game } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { Button } from '@mui/material';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { GameModel } from './model';
import EditDialog from './components/edit-dialog';

const RootPage = () => {
  const { gameList, total, isLoading, pageNum, pageSize, refetch } = GameModel.useGameList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });
  const [open, setOpen] = useState(false);
  const [currentData, setCurrent] = useState<Game>();

  const openEditDialog = (row: Game) => {
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
      <Title
        title="游戏管理"
        action={
          <Button
            variant="contained"
            onClick={() => {
              setCurrent(undefined);
              setOpen(true);
            }}
          >
            添加游戏
          </Button>
        }
      />
      <AgCommonTable
        ref={gridRef}
        loading={isLoading}
        columnDefs={column}
        rowData={gameList}
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

export default RootPage;
