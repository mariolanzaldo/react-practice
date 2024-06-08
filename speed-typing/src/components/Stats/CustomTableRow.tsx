import { TableCell, TableRow } from "@mui/material";
import { Column } from "../../utils/constants";
// import { Column } from "../../utils/constants";

interface CustomTableRowProps {
    //eslint-disable-next-line
    row: Record<string, any>;
    columns: readonly Column[];
}

function CustomTableRow({ row, columns}: CustomTableRowProps) {
    return(
        <TableRow  hover role="checkbox" tabIndex={-1} key={row.winner}>
            {
                columns.map((column) => {
                    const value = row[column.id];

                    return(
                        <TableCell key={column.id}  align={column.align}>
                            {
                                column.format && typeof value === 'number' ? column.format(value) : value
                            }
                        </TableCell>
                    )
                })
            }
        </TableRow>
    );
}

export default CustomTableRow;