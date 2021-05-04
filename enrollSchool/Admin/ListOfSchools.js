import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, manager, managertype, date, studentsize,typeofschool,status) {
  return {name, manager, managertype, date, studentsize,typeofschool,status};
}

const rows = [
  // createData('Royal Crown Int School', "John Haper", "RAM","23rd July 1983", "500","Kindergaten","Completed"),
  createData("Royal Crown Int School", "Joe Ansah44444444444", "RAM333333333333333", "12TH May 1988", "600","Kindergatten","Not Complete"),

  createData("Royal Crown Int School", "Joe Ansah", "RAM", "12TH May 1988", "600","Kindergatten","Not Complete"),
  createData("Royal Crown Int School", "Joe Ansah", "RAM", "12TH May 1988", "600","Kindergatten","Not Complete"),

  createData("Royal Crown Int School", "Joe Ansah", "RAM", "12TH May 1988", "600","Kindergatten","Not Complete"),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name Of School </StyledTableCell>
            <StyledTableCell align="right">Manager</StyledTableCell>
            <StyledTableCell align="right">Manager Type</StyledTableCell>
            <StyledTableCell align="right">Date Enrolled </StyledTableCell>
            <StyledTableCell align="right">Students Size </StyledTableCell>
            <StyledTableCell align="right">Type of School </StyledTableCell>
            <StyledTableCell align="right">Setup Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>

              <StyledTableCell component="th" scope="row">{row.name}  </StyledTableCell>
              <StyledTableCell align="right">{row.manager}  </StyledTableCell>
              <StyledTableCell align="right">{row.managertype}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.studentsize}</StyledTableCell>
              <StyledTableCell align="right">{row.typeofschool}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}


              {/* return { name, manager, managertype, date,studentsize, typeofschool,status}; */}

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
