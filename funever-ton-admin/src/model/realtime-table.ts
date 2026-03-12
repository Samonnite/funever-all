import {
  GridReadyEvent,
  IServerSideDatasource,
  IServerSideGetRowsRequest,
} from 'ag-grid-community';
import { useMemoizedFn } from 'ahooks';
import { useQueryParams } from 'hooks/useQueryParams';
import { useTable } from 'utils';

export const DEFAULT_SIZE = 1000;

export const useRealtimeTable = <T>({
  refetch,
  id,
  defaultParams,
}: {
  refetch: (params: any) => Promise<any>;
  id?: string;
  defaultParams?: T;
}) => {
  const { destroy } = useTable(id || 'RedisAdminUserPosition');
  const [, setQuery] = useQueryParams();
  const createServerSideDatasource: (server: any) => IServerSideDatasource = (server: any) => ({
    getRows: (params) => {
      console.log('[Datasource] - rows requested by grid: ', params.request);
      // get data for request from our fetch server
      server.getData(params.request).then((response: { success: boolean; rows: any[] }) => {
        // simulating real server call with a 500ms delay
        if (response.success) {
          // supply rows for requested block to grid
          params?.api?.hideOverlay();
          if (!response.rows.length) {
            params?.api?.showNoRowsOverlay();
          }
          params.success({ rowData: response.rows });
        } else {
          params.api?.hideOverlay();
          params.fail();
        }
      });
    },
    destroy: () => {
      console.log('[Datasource] destroy');
      destroy();
    },
  });

  const createFetchServer = useMemoizedFn((query: any) => ({
    getData: (request: IServerSideGetRowsRequest) => {
      // in this simplified fetch server all rows are contained in an array
      const { endRow } = request;
      const pageNum = Number(endRow) / DEFAULT_SIZE < 1 ? 1 : Number(endRow) / DEFAULT_SIZE;

      setQuery({
        ...defaultParams,
        ...query,
      });
      return new Promise((resolve) => {
        refetch({
          ...defaultParams,
          ...query,
          pageSize: DEFAULT_SIZE,
          pageNum,
          sortList: [{ field: 'createTime', type: 'desc' }],
        })
          .then(({ data }) => {
            resolve({
              success: true,
              rows: data,
            });
          })
          .catch(() => {
            resolve({
              success: true,
              rows: [],
            });
          });
      });
    },
  }));

  const onGridReady = useMemoizedFn((params?: GridReadyEvent, query?: any) => {
    const fetchServer = createFetchServer(query);
    // create datasource with a reference to the fetch server
    const datasource = createServerSideDatasource(fetchServer);
    // register the datasource with the grid
    params?.api!.setServerSideDatasource(datasource);
  });
  return {
    createServerSideDatasource,
    createFetchServer,
    onGridReady,
  };
};
