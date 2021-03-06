import {
    useState,
    useContext
} from 'react';


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import {
    map,
    size,
    slice
} from 'lodash';

import { AlbumContext } from '../context/AlbumContext';
import AlbumList from './AlbumList';
import SearchBox from './SearchBox';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    wrapper: {
        width: '78%',
        overflowX: 'auto',
        margin: 'auto'
    }
});

function AlbumLists() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const {
        albumdata = [],
        setSearch
    } = useContext(AlbumContext);

    return (
        <>
            <SearchBox
                onChange={
                    (e) => setSearch(e.target.value)
                }
            />
            <TableContainer component={Paper} className={classes.wrapper}>
                <Table className={classes.table} stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">userId</StyledTableCell>
                            <StyledTableCell align="center">Title</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {map(
                            slice(
                                albumdata, page * rowsPerPage, page * rowsPerPage + rowsPerPage
                            ),
                            (data) => (
                                <StyledTableRow key={data.id}>
                                    <AlbumList
                                        {...data}
                                    />
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={size(albumdata)}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default AlbumLists