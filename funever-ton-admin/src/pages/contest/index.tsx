import React, { useRef, useState } from 'react';
import Title from 'components/Title';
import { GameContest } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { Button } from '@mui/material';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { ContestModel } from './model';
import EditDialog from './components/edit-dialog';

const RootPage = () => {
  const { contestList, total, isLoading, pageNum, pageSize, refetch } =
    ContestModel.useContestList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });
  const [open, setOpen] = useState(false);
  const [currentData, setCurrent] = useState<GameContest>();

  const openEditDialog = (row: GameContest) => {
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
        title="赛事管理"
        action={
          <Button
            variant="contained"
            onClick={() => {
              setCurrent(undefined);
              setOpen(true);
            }}
          >
            添加赛事
          </Button>
        }
      />
      <AgCommonTable
        ref={gridRef}
        loading={isLoading}
        columnDefs={column}
        rowData={contestList}
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
