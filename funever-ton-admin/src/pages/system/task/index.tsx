import React, { useState, useRef } from 'react';
import Title from 'components/Title';

import { ConfigTask } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { Button } from '@mui/material';
import { useColumn } from './column';
import ConfigDialog from './config-dialog';
import { SystemTaskModel } from '../model/task';
import DeleteDialog from './delete-dialog';

const RolePage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentData, setCurrent] = useState<ConfigTask>();

  const { systemTask, isFetching } = SystemTaskModel.useSystemTask();

  const openEditDialog = (row?: ConfigTask) => {
    setCurrent(row);
    setOpenEdit(true);
  };

  const openDeleteDialog = (row?: ConfigTask) => {
    setCurrent(row);
    setOpenDelete(true);
  };

  const gridRef = useRef<any>();

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
        name: '删除',
        action: () => {
          openDeleteDialog(params.node?.data);
        },
      },
      'separator',
    ];

    return result;
  };

  const { column } = useColumn({
    openEditDialog,
    openDeleteDialog,
  });

  return (
    <>
      <Title
        title="任务配置"
        action={
          <Button
            variant="contained"
            onClick={() => {
              setCurrent(undefined);
              setOpenEdit(true);
            }}
          >
            添加任务
          </Button>
        }
      />
      <AgCommonTable
        loading={isFetching}
        columnDefs={column}
        rowData={systemTask}
        total={systemTask?.length}
        extraContextMenuItems={extraContextMenuItems}
        ref={gridRef}
        isNoPage
      />
      {openEdit && (
        <ConfigDialog open={openEdit} onClose={() => setOpenEdit(false)} data={currentData} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} onClose={() => setOpenDelete(false)} data={currentData} />
      )}
    </>
  );
};

export default RolePage;
