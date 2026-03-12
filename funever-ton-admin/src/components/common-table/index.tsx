import { Table, TableBody, TableContainer } from '@mui/material';

// components
import Scrollbar from '../scrollbar';
import {
  useTable,
  TableNoData,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from '../table';
import CommonTableRow from './TableRow';

interface CommonTableProps {
  tableData: any[];
  total?: number;
  columns: any[];
  isNoPaga?: boolean;
  refetch?: (values: any) => void;
  sx?: Object;
}

export default function CommonTable({
  tableData,
  columns,
  total,
  isNoPaga,
  refetch,
  sx,
}: CommonTableProps) {
  const {
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultRowsPerPage: 100, refetch });

  return (
    <div>
      <TableContainer
        sx={{
          position: 'relative',
          overflow: 'unset',
          ...sx,
        }}
      >
        <TableSelectedAction
          numSelected={selected.length}
          rowCount={tableData.length}
          onSelectAllRows={(checked) =>
            onSelectAllRows(
              checked,
              tableData.map((row) => row.id)
            )
          }
        />

        <Scrollbar sx={{ maxHeight: 'calc(100vh - 300px)' }}>
          <Table size="small" sx={{ minWidth: 800 }} stickyHeader>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={columns}
              rowCount={tableData.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
            />

            <TableBody>
              {tableData?.map((row, index) => (
                <CommonTableRow
                  key={index}
                  row={row}
                  columns={columns}
                  selected={selected.includes(row.uid)}
                />
              ))}

              {/* <TableEmptyRows
                height={56}
                emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
              /> */}

              <TableNoData isNotFound={!tableData.length} />
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      {tableData.length > 0 && !isNoPaga && (
        <TablePaginationCustom
          count={total ?? -1}
          page={!total || total <= 0 ? 0 : page}
          rowsPerPage={rowsPerPage}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
          //
        />
      )}
    </div>
  );
}
