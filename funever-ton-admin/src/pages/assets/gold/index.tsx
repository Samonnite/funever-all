import React, { useRef } from 'react';
import Title from 'components/Title';
import AgCommonTable from 'components/ag-table/common';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import QueryForm from './components/query-form';
import { useColumn } from './column';
import { GoldDepositModel } from './model';

const RootPage = () => {
  const { goldRecordList, total, isLoading, pageNum, pageSize, refetch } =
    GoldDepositModel.useDepositList();
  const { handleChangePage, handleSearch } = usePaginationAndSearch({ refetch });

  const gridRef = useRef<any>();

  const { column } = useColumn();
  return (
    <div>
      <Title title="金币充值记录" />
      <AgCommonTable
        ref={gridRef}
        loading={isLoading}
        columnDefs={column}
        rowData={goldRecordList}
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
