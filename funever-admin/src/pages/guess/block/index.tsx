import AgCommonTable from 'components/ag-table/common';
import { useMemo, useState } from 'react';
import { IDetailCellRendererParams, ValueFormatterParams } from 'ag-grid-community';

import { GameGuessBlock, GameGuessBlockUserItem } from 'api/model';
import { Dialog } from '@mui/material';
import { useColumn } from './column';
import { GuessModel } from '../model';
import RetryDialog from '../components/retry-dialog';
import QueryForm from './query-form';

const RealUserList = ({ open, onClose, data }: any) => {
  const [openRetry, setOpenRetry] = useState(false);
  const [currentData, setCurrent] = useState<GameGuessBlock>();

  const { list, isLoading, refetch } = GuessModel.useGuessBlock(data);

  const openDialog = (row: GameGuessBlock) => {
    setCurrent(row);
    setOpenRetry(true);
  };

  const detailCellRendererParams = useMemo(
    () =>
      ({
        detailGridOptions: {
          columnDefs: [
            {
              field: 'uid',
              headerName: '用户UID',
              minWidth: 120,
              valueFormatter: (params: ValueFormatterParams) =>
                params.value ? params.value : '抽水',
            },
            { field: 'toOwner', headerName: '用户主地址', minWidth: 300 },
            { field: 'toAddr', headerName: '用户实际收款地址', minWidth: 300 },
            { field: 'tranQty', headerName: '用户实际收款数量', minWidth: 150 },
          ],
          defaultColDef: {
            flex: 1,
            resizable: true,
            suppressMenu: true,
          },
        },
        getDetailRowData: (params) => {
          params.successCallback(params?.data?.tranUser?.users!);
        },
      } as IDetailCellRendererParams<GameGuessBlock, GameGuessBlockUserItem>),
    []
  );

  const { column } = useColumn({
    openDialog,
  });
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="链上转账记录"
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
      <AgCommonTable
        loading={isLoading}
        columnDefs={column}
        rowData={list}
        total={list?.length}
        masterDetail
        detailCellRendererParams={detailCellRendererParams}
        detailRowHeight={500}
      >
        <QueryForm refetch={() => refetch()} />
      </AgCommonTable>
      {openRetry && (
        <RetryDialog
          open={openRetry}
          onClose={() => setOpenRetry(false)}
          data={currentData?.id as number}
        />
      )}
    </Dialog>
  );
};

export default RealUserList;
