import React, { useRef } from 'react';
import Title from 'components/Title';
import AgCommonTable from 'components/ag-table/common';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { WalletRecordModel } from './model';

const RootPage = () => {
  const { recordList, total, isLoading, pageNum, pageSize, refetch } =
    WalletRecordModel.useWalletRecordList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });

  const gridRef = useRef<any>();

  const { column } = useColumn();
  return (
    <div>
      <Title title="钱包交易记录" />
      <AgCommonTable
        ref={gridRef}
        loading={isLoading}
        columnDefs={column}
        rowData={recordList}
        total={total}
        refetch={handleChangePage}
        paga={{
          pageNum,
          pageSize,
        }}
      >
        <QueryForm refetch={handleSearch} />
      </AgCommonTable>
    </div>
  );
};

export default RootPage;
