import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function AlbumList({ id, title, userId }) {
    return (
        <>
            <StyledTableCell align="center">{id}</StyledTableCell>
            <StyledTableCell align="center">{userId}</StyledTableCell>
            <StyledTableCell align="center">{title}</StyledTableCell>
        </>
    )
}
