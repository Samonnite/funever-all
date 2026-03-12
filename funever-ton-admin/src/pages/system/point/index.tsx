import React, { useState, useRef } from 'react';
import Title from 'components/Title';

import { ConfigPoint } from 'api/model';
import AgCommonTable from 'components/ag-table/common';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { useColumn } from './column';
import ConfigDialog from './config-dialog';
import { SystemPointModel } from '../model/point';

const RolePage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [currentData, setCurrent] = useState<ConfigPoint>();

  const { systemPoint, isFetching } = SystemPointModel.useSystemPoint();

  const openEditDialog = (row?: ConfigPoint) => {
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
      <Title title="积分配置" />
      <AgCommonTable
        loading={isFetching}
        columnDefs={column}
        rowData={systemPoint}
        total={systemPoint?.length}
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
