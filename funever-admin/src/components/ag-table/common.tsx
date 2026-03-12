import React, { useRef, useEffect, forwardRef, useImperativeHandle, useMemo } from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'; // the AG Grid React Component
import {
  LicenseManager,
  SideBarDef,
  GetContextMenuItemsParams,
  MenuItemDef,
} from 'ag-grid-enterprise';

import classNames from 'classnames';
import { css } from '@emotion/css';
import { alpha, useTheme } from '@mui/material/styles';

import { Card, Grid, IconButton } from '@mui/material';
import Iconify from 'components/iconify';
import { TablePaginationCustom } from 'components/table';
import { FirstDataRenderedEvent } from 'ag-grid-community';
import { isString } from 'lodash';
import { useCreation, useMemoizedFn } from 'ahooks';
import { defaultPaga } from 'model/common';
import useTable from './paga';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import './index.css';

LicenseManager.setLicenseKey(process.env.REACT_APP_TABLE_LICENSE_KEY ?? '');

export type AgCommonProps = {
  columnDefs?: any;
  rowData?: any;
  total?: number;
  refetch?: any;
  paga?: { pageNum: number; pageSize: number };
  isNoPage?: boolean;
  isFilter?: boolean;
  isExtra?: boolean;
  loading?: boolean;
  extraContextMenuItems?: (params: GetContextMenuItemsParams) => (string | MenuItemDef)[];
  children?: any;
  className?: string;
  sx?: Object;
} & AgGridReactProps;

const AgCommonTable = forwardRef<any, AgCommonProps>(
  (
    {
      columnDefs,
      rowData,
      children,
      refetch,
      isExtra,
      paga = defaultPaga,
      isNoPage = false,
      extraContextMenuItems = () => [],
      total,
      isFilter = true,
      className,
      loading,
      sx,
      ...props
    },
    ref
  ) => {
    const gridRef = useRef<any>(); // Optional - for accessing Grid's API
    const agGridDom = useRef<any>();
    const theme = useTheme();
    const isLight = useCreation(() => theme.palette.mode === 'light', [theme.palette.mode]);

    useImperativeHandle(ref, () => gridRef.current);

    const { page, rowsPerPage, onChangePage, onChangeRowsPerPage } = useTable({
      pageNum: paga?.pageNum,
      pageSize: paga?.pageSize,
      refetch,
    });

    const onFirstDataRendered = useMemoizedFn((params: FirstDataRenderedEvent<any, any>) => {
      const dom = agGridDom.current.querySelector('.ag-header-container');
      if (Number(dom?.offsetWidth) < document.body.offsetWidth) {
        params.api.sizeColumnsToFit();
      } else {
        autoSizeAll();
      }
    });

    const autoSizeAll = useMemoizedFn(() => {
      const allColumnIds: string[] = [];
      gridRef.current!.columnApi!.getColumns()!.forEach((column: any) => {
        allColumnIds.push(column.getId());
      });

      gridRef.current!.columnApi!.autoSizeColumns(allColumnIds, false);
    });

    const handleClick = useMemoizedFn((e: Event) => {
      const dom = agGridDom.current.querySelector('.ag-center-cols-container');
      const dialog = document.querySelector('.MuiDialog-container');
      const dialogTable = dialog?.querySelector('.ag-center-cols-container');
      const checkbox = agGridDom.current?.querySelector('.ag-checkbox-input');

      if (dialogTable && !dom?.contains(e?.target as any)) {
        gridRef.current!.api?.deselectAll();
        gridRef.current!.api?.clearRangeSelection();
        return;
      }

      if (!dom?.contains(e.target) && !dialog && !checkbox?.contains(e.target)) {
        gridRef.current!.api?.deselectAll();
        gridRef.current!.api?.clearRangeSelection();
      }
    });

    useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }, [handleClick]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useCreation(
      () => ({
        sortable: true,
        resizable: true,
        minWidth: 120,
        flex: 1,
        filter: 'agSetColumnFilter',
      }),
      []
    );

    const sideBar: SideBarDef = useCreation(
      () => ({
        toolPanels: [
          {
            id: 'columns',
            labelDefault: 'Columns',
            labelKey: 'columns',
            iconKey: 'columns',
            toolPanel: 'agColumnsToolPanel',
            minWidth: 225,
            maxWidth: 225,
            width: 225,
            toolPanelParams: {
              suppressRowGroups: true,
              suppressValues: true,
              suppressPivots: true,
              suppressPivotMode: true,
              suppressColumnSelectAll: true,
              suppressColumnExpandAll: true,
            },
          },
        ],
        defaultToolPanel: 'columns',
        position: 'left',
        hiddenByDefault: true,
      }),
      []
    );

    const getContextMenuItems = (params: GetContextMenuItemsParams): (string | MenuItemDef)[] => {
      const menuList = extraContextMenuItems(params)?.map((item) => {
        if (isString(item)) return item;
        return {
          disabled: !rowData?.length || !params.node?.data,
          ...(item as MenuItemDef),
        };
      });

      const result: (string | MenuItemDef)[] = [...menuList, 'copy', 'export'];

      return result;
    };

    const popupParent = useMemo<HTMLElement | null>(() => {
      const dialog = document.querySelector('.MuiDialog-container') as HTMLElement;
      const dialogTable = dialog?.querySelector('.ag-center-cols-container');
      if (dialogTable) return dialog;
      return document.querySelector('body');
    }, []);

    // Example of consuming Grid Event
    const cellClickedListener = useMemoizedFn((event: any) => {
      console.log('cellClicked', event);
      event?.node.setSelected(true);
    });

    const isSideBarVisible = useMemoizedFn(() => gridRef.current!.api.isSideBarVisible());
    const getOpenedToolPanel = useMemoizedFn(() => gridRef.current!.api.getOpenedToolPanel());
    const setSideBarVisible = useMemoizedFn((show: boolean) => {
      gridRef.current!.api.setSideBarVisible(show);
    });
    const openToolPanel = useMemoizedFn((key: string) => {
      gridRef.current!.api.openToolPanel(key);
    });

    const closeToolPanel = useMemoizedFn(() => {
      gridRef.current!.api.closeToolPanel();
    });

    const toggleSideBar = useMemoizedFn((key: string) => {
      if (!isSideBarVisible()) {
        setSideBarVisible(true);
      }
      if (getOpenedToolPanel()) {
        closeToolPanel();
      } else {
        openToolPanel(key);
      }
    });

    useEffect(() => {
      if (loading && !rowData?.length) {
        gridRef.current!.api?.showLoadingOverlay();
      } else if (rowData?.length) {
        gridRef.current!.api?.hideOverlay();
      }
    }, [loading, rowData]);

    return (
      <Card sx={{ px: 2, ...sx }}>
        <div
          ref={agGridDom}
          style={{ width: '100%', height: '100%', minHeight: 300 }}
          className={isLight ? 'ag-theme-alpine' : 'ag-theme-alpine-dark'}
        >
          <Grid container alignItems="flex-start" wrap="nowrap">
            {isFilter && (
              <Grid item>
                <IconButton onClick={() => toggleSideBar('columns')} sx={{ mt: 2, mr: 1 }}>
                  <Iconify icon="ep:menu" />
                </IconButton>
              </Grid>
            )}
            <Grid item container alignItems="center" flexWrap="nowrap">
              {children}
            </Grid>
            {isExtra && <Grid item xs={4} />}
          </Grid>
          <AgGridReact
            className={classNames(
              css`
                --ag-header-foreground-color: ${theme.palette.text.secondary};
                --ag-header-background-color: ${theme.palette.background.neutral};
                --ag-data-color: ${theme.palette.text.primary};
                --ag-foreground-color: ${theme.palette.text.primary}!important;
                --ag-background-color: ${theme.palette.background.paper};
                --ag-odd-row-background-color: ${theme.palette.background.paper};
                --ag-selected-row-background-color: ${alpha(theme.palette.primary.light, 0.24)};
                --ag-row-hover-color: ${theme.palette.action.hover};
                --ag-header-cell-hover-background-color: ${theme.palette.action.hover};
                --ag-checkbox-unchecked-color: ${theme.palette.text.secondary};
                --ag-checkbox-checked-color: ${theme.palette.primary.main}!important;
                --ag-checkbox-indeterminate-color: ${theme.palette.primary.main};
                --ag-control-panel-background-color: ${theme.palette.background.neutral}!important;
                --ag-subheader-background-color: ${theme.palette.background.neutral};
                --ag-secondary-foreground-color: ${theme.palette.background.neutral};
                .ag-root-wrapper {
                  min-height: calc(100vh - 280px);
                  border: none;
                  .ag-header {
                    border: none;
                  }
                  .ag-row {
                    border-bottom-color: ${isLight ? '#f1f3f4' : '#2e3236'};
                    --ag-row-height: 44px;
                  }
                }
              `,
              className
            )}
            ref={gridRef} // Ref for accessing Grid's API
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            // animateRows // Optional - set to 'true' to have rows animate when sorted
            rowSelection="multiple" // Options - allows click selection of rows
            enableRangeSelection
            suppressCopySingleCellRanges
            suppressCopyRowsToClipboard
            // copyHeadersToClipboard
            deltaSort
            sideBar={sideBar}
            getContextMenuItems={getContextMenuItems}
            onFirstDataRendered={onFirstDataRendered}
            onCellContextMenu={(event) => {
              event.node.setSelected(true);
              gridRef.current!.api?.clearRangeSelection();
            }}
            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            overlayNoRowsTemplate="暂无数据"
            rowBuffer={100}
            suppressScrollOnNewData
            popupParent={popupParent}
            scrollbarWidth={10}
            // pagination
            // paginationPageSize={defaultPaga.pageSize}
            {...props}
          />
        </div>
        {!isNoPage && (
          <TablePaginationCustom
            count={total ?? 0}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />
        )}
      </Card>
    );
  }
);

export default React.memo(AgCommonTable);
