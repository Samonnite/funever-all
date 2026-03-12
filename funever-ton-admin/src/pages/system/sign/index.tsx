import React, { useState, useRef } from 'react';
import Title from 'components/Title';

import { ConfigSign } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { useColumn } from './column';
import ConfigDialog from './config-dialog';
import { SystemSignModel } from '../model/sign';

const RolePage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [currentData, setCurrent] = useState<ConfigSign>();

  const { systemSign, isFetching } = SystemSignModel.useSystemSign();

  const openEditDialog = (row?: ConfigSign) => {
    setCurrent(row);
    setOpenEdit(true);
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
    ];

    return result;
  };

  const { column } = useColumn({
    openEditDialog,
  });

  return (
    <>
      <Title title="签到配置" />
      <AgCommonTable
        loading={isFetching}
        columnDefs={column}
        rowData={systemSign}
        total={systemSign?.length}
        extraContextMenuItems={extraContextMenuItems}
        ref={gridRef}
        isNoPage
      />
      {openEdit && (
        <ConfigDialog open={openEdit} onClose={() => setOpenEdit(false)} data={currentData} />
      )}
    </>
  );
};

export default RolePage;
