import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#525d9e",
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
});

export default function CustomTable({ heads, datas }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {
                            heads.map((item, index) => {
                                return <StyledTableCell key={index}>{item}</StyledTableCell>
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell  >
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell >{row.price}</StyledTableCell>
                            <StyledTableCell >
                                {row.limit}
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button variant="contained" color="secondary">
                                    <DeleteForeverIcon style={{ color: "#fff" }} />
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}