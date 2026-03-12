import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import {
  ServerSideTransaction,
  GetRowIdFunc,
  GetRowIdParams,
  ServerSideTransactionResult,
} from 'ag-grid-enterprise';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import every from 'lodash/every';
import isNull from 'lodash/isNull';
import isPlainObject from 'lodash/isPlainObject';
import pickBy from 'lodash/pickBy';
import { useCreation, useDeepCompareEffect, useMemoizedFn, useUnmount } from 'ahooks';
import { useSocketMessage } from 'hooks/useSocketMessage';
import { DEFAULT_SIZE } from 'model/realtime-table';
import AgCommonTable, { AgCommonProps } from './common';

type UnknownObject = {
  [key: string]: any;
};
type QueryType = UnknownObject;
export type RowItem = UnknownObject;
export interface MatchData {
  item: RowItem;
  rowNode: UnknownObject;
  isMatched: boolean;
  queryPrimitives?: UnknownObject;
  addRows: RowItem[];
  updateRows: RowItem[];
  removeRows: RowItem[];
  pinRows?: RowItem[];
}

const chMap: Record<string, string> = {
  position: 'admin_sub_position',
  order: 'admin_sub_order',
  opt_order: 'admin_sub_opt_order',
};

const AgTable = forwardRef<
  any,
  {
    ch: string;
    wsEvent?: string;
    indexField: string;
    query?: QueryType;
    total: number;
    matchData?: (_: MatchData) => void;
    pins?: RowItem[];
  } & AgCommonProps
>(({ ch, wsEvent, indexField, query, total, matchData, pins, ...props }, ref) => {
  const gridRef = useRef<any>(); // Optional - for accessing Grid's API
  const { lastMessage, sendJsonMessage, unsubscribe, readyState } = useSocketMessage({
    ch,
    event: wsEvent,
  });
  const subCh = useCreation(() => chMap[ch], [ch]);
  const subRequest = useCreation(() => ({ ch: subCh, op: 'sub' }), [subCh]);
  const unsubRequest = useCreation(() => ({ ch: subCh, op: 'unsub' }), [subCh]);
  const queryPrimitives = useCreation(
    () => pickBy(query, (value) => !isNull(value) && !isPlainObject(value)),
    [query]
  );

  const count = gridRef.current?.api?.getDisplayedRowCount();
  useImperativeHandle(ref, () => ({
    grid: gridRef.current,
  }));

  const getRowId = useCreation<GetRowIdFunc>(
    () => (params: GetRowIdParams) => `${params.data[indexField]}`,
    [indexField]
  );

  const rowBuffer = useCreation(() => {
    if (total > 500) return 100;
    if (total < 200) return 20;
    if (total <= 0) return 0;
    return 50;
  }, [total]);

  const transactionRows = useMemoizedFn(
    ({
      addRows,
      updateRows,
      removeRows,
      addIndex,
      callback,
    }: {
      addRows?: RowItem[];
      updateRows?: RowItem[];
      removeRows?: RowItem[];
      addIndex?: number;
      callback?: (res: ServerSideTransactionResult) => void;
    }) => {
      const transaction: ServerSideTransaction = {
        addIndex: addIndex || 0,
        add: addRows,
        update: updateRows,
        remove: removeRows,
      };
      gridRef.current?.api?.applyServerSideTransactionAsync(
        transaction,
        (e: ServerSideTransactionResult) => callback?.(e)
      );
    }
  );

  const updateData = useMemoizedFn((responseMessage: any) => {
    const addRows: RowItem[] = [];
    const updateRows: RowItem[] = [];
    const removeRows: RowItem[] = [];
    const pinRows: RowItem[] = [];

    const processItem = (item: RowItem) => {
      const id = item[indexField];
      const rowNode = gridRef.current?.api?.getRowNode(id);

      const isMatched =
        !queryPrimitives ||
        every(queryPrimitives, (value, key) => {
          // eslint-disable-next-line no-prototype-builtins
          if (item?.hasOwnProperty(key)) {
            return String(item[key]) === String(value);
          }
          return true;
        });
      matchData?.({
        item,
        rowNode,
        isMatched,
        queryPrimitives,
        addRows,
        updateRows,
        removeRows,
        pinRows,
      });
    };

    const processResponseData = (responseData: RowItem[]) => {
      responseData.forEach((item) => processItem(item));
    };

    processResponseData(responseMessage);

    if (pinRows.length) {
      transactionRows({
        addRows: pinRows,
      });
    }

    transactionRows({
      addIndex: pins?.length || 0,
      addRows,
      updateRows,
      removeRows,
    });
  });

  useDeepCompareEffect(() => {
    if (count > 0) {
      gridRef.current?.api?.hideOverlay();
    }
    if (count === 0) {
      gridRef.current?.api?.showNoRowsOverlay();
    }
  }, [count]);

  useEffect(() => {
    if (lastMessage.length) {
      updateData(lastMessage);
    }
  }, [lastMessage, updateData]);

  useDeepCompareEffect(() => {
    if (readyState === WebSocket.OPEN && subRequest.ch) {
      sendJsonMessage(subRequest);
    }
  }, [readyState, subRequest]);

  useUnmount(() => {
    if (unsubRequest.ch) {
      sendJsonMessage(unsubRequest);
      unsubscribe();
    }
    gridRef.current = null;
  });

  return (
    <AgCommonTable
      ref={gridRef}
      isNoPage
      getRowId={getRowId}
      rowModelType="serverSide"
      cacheBlockSize={DEFAULT_SIZE}
      cacheOverflowSize={100}
      maxBlocksInCache={2}
      maxConcurrentDatasourceRequests={2}
      serverSideInitialRowCount={total}
      rowBuffer={rowBuffer}
      asyncTransactionWaitMillis={100}
      {...props}
    />
  );
});

export default React.memo(AgTable);
