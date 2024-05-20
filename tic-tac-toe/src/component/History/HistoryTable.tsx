import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, styled } from '@mui/material';
import { useAppContext } from '../../state';
import formatDate from '../../utils/formatDate';
import { columns } from '../../utils/constants';
import CustomTableRow from './CustomTableRow';

const StyledPaper = styled(Paper)(() => ({
    width: '100%', 
    overflow: 'hidden'
}));

function HistoryTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // eslint-disable-next-line
  const [state, dispatch] = useAppContext();

  const rows = state.stats.map((element) => {
    const { winner, gameEnd, duration } = element;

    const date = formatDate(gameEnd);
    
    return {
        date,
        winner: winner?.name ?? "-",
        symbol: winner?.symbol ?? "-",
        moves: winner?.moves ?? 5,
        duration,
    };
  });

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <StyledPaper>
      <TableContainer
       sx={{ minHeight: 100, maxHeight: 440 }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* <TableBody>
              {
                (!rows || rows.length === 0) ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      <Box  py={3}>
                        <Typography>
                          History log is empty, play a game!
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : ( <>
                      {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.winner}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </>)
              }
          </TableBody> */}
          <TableBody>
              {
                (!rows || rows.length === 0) ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      <Box  py={3}>
                        <Typography>
                          History log is empty, play a game!
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : ( 
                  paginatedRows.map((row) => (
                    <CustomTableRow row={row} columns={columns}/>
                  ))
                )
              }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledPaper>
  );
}


export default HistoryTable;