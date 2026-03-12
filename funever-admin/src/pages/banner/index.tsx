import React, { useState, useRef } from 'react';
import Title from 'components/Title';
import { Button } from '@mui/material';
import { DataBanner } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import QueryForm from './query-form';
import { useColumn } from './column';
import BannerDialog from './banner-dialog';
import { BannerModel } from './model/index';
import DeleteDialog from './delete-dialog';

const BannerPage = () => {
  const { bannerList, total, pageNum, pageSize, isLoading, refetch } = BannerModel.useBannerQuery();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentData, setCurrent] = useState<DataBanner>();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });

  const openDialog = (row?: DataBanner) => {
    setCurrent(row);
    setOpen(true);
  };

  const openDeleteDialog = (row?: DataBanner) => {
    setCurrent(row);
    setOpenDelete(true);
  };

  const extraContextMenuItems = (params: GetContextMenuItemsParams) => {
    const result = [
      {
        name: '编辑',
        action: () => {
          openDialog(params.node?.data);
        },
      },
      'separator',
      {
        name: '删除',
        action: () => {
          openDeleteDialog(params.node?.data);
        },
        disabled: !params.node?.data,
      },
      'separator',
    ];

    return result;
  };

  const gridRef = useRef<any>();

  const { column } = useColumn({ openDialog, openDeleteDialog });
  return (
    <div>
      <Title
        title="Banner管理"
        action={
          <Button
            variant="contained"
            onClick={() => {
              setCurrent(undefined);
              openDialog();
            }}
          >
            添加Banner
          </Button>
        }
      />
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={bannerList}
        total={total}
        extraContextMenuItems={extraContextMenuItems}
        refetch={handleChangePage}
        ref={gridRef}
        paga={{
          pageNum,
          pageSize,
        }}
      >
        <QueryForm refetch={handleSearch} />
      </AgCommonTable>
      {open && <BannerDialog open={open} onClose={() => setOpen(false)} data={currentData} />}
      {openDelete && (
        <DeleteDialog open={openDelete} onClose={() => setOpenDelete(false)} data={currentData} />
      )}
    </div>
  );
};

export default BannerPage;
