import AgCommonTable from 'components/ag-table/common';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { useEffect, useMemo } from 'react';
import { IDetailCellRendererParams } from 'ag-grid-community';
import {
  UserTransferTypeTextObjCellValue,
  UerTransferTextObjCellValue,
  HashLinkRender,
} from 'components/cellRender';
import { MatchApply, AdminUserMatch } from 'api/model';
import { Dialog } from '@mui/material';
import QueryForm from '../components/query-user-form';
import { useColumn } from './column';
import { GuessModel } from '../model';

const RealUserList = ({ open, onClose, data }: any) => {
  const { guessUserList, total, isLoading, pageNum, pageSize, refetch } =
    GuessModel.useGuessUserList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({
    refetch,
    defaultParams: {
      mid: data,
    },
    immediate: false,
    id: 'guess-user',
  });

  const detailCellRendererParams = useMemo(
    () =>
      ({
        detailGridOptions: {
          columnDefs: [
            { field: 'fromOwner', headerName: '转出地址', minWidth: 400 },
            { field: 'toOwner', headerName: '转入地址', minWidth: 400 },
            { field: 'hash', headerName: '转账哈希', minWidth: 150, cellRenderer: HashLinkRender },
            { field: 'qty', headerName: '转账数量', minWidth: 120 },
            {
              field: 'type',
              headerName: '转账类型',
              ...UserTransferTypeTextObjCellValue,
              minWidth: 120,
            },
            {
              field: 'status',
              headerName: '转账状态',
              ...UerTransferTextObjCellValue,
              minWidth: 120,
            },
          ],
          defaultColDef: {
            flex: 1,
            resizable: true,
            suppressMenu: true,
          },
        },
        getDetailRowData: (params) => {
          params.successCallback(params?.data?.detail?.details!);
        },
      } as IDetailCellRendererParams<AdminUserMatch, MatchApply>),
    []
  );

  useEffect(() => {
    handleSearch({ mid: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { column } = useColumn(data);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="投注用户"
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
        rowData={guessUserList}
        total={total}
        masterDetail
        detailCellRendererParams={detailCellRendererParams}
        detailRowHeight={500}
        refetch={handleChangePage}
        paga={{
          pageNum,
          pageSize,
        }}
      >
        <QueryForm refetch={handleSearch} />
      </AgCommonTable>
    </Dialog>
  );
};

export default RealUserList;
