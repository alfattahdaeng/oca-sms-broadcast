import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) =>({
  tableContainer: {
    position: 'relative',
    width: '100%',
    maxHeight: '250px',
    overflowY: 'scroll',
    display: 'block',
    '& .MuiTableCell-root':{
      borderBottom: 'none',
    },
    '&::-webkit-scrollbar': {
      width: '6px',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(196,196,196,0.4)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#ED1260',
      outline: 'none',
      borderRadius: '4px',
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: '400px',
      '& .MuiTableHead-root':{
        display: 'block',
      },
      '& .MuiTableBody-root':{
        display: 'block',
      },
    },
  },
  tableHeadTitle: {
    '& th':{
      textAlign: 'center',
      color: '#979797',
      paddingTop: '0',
      [theme.breakpoints.down("xs")]: {
        minWidth: '120px',
      },
    },
  },
  tableBodyItem:{
    '& .MuiTableCell-root':{
      paddingTop: '5px',
      paddingBottom: '5px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '115px',
      },
    },
  },
}));

function createData(idname, type, campaign, totalblast, status, date) {
  return { idname, type, campaign, totalblast, status, date };
}

const rows = [
  createData("MTN_EGY-LIFE", 'Call', 'Reminding Billing 20 September', 1255, 'Success', 'July 15, 2018 4:47 AM'),
  createData("IMTN_BCA", 'Call', 'Reminding Billing 20 September', 600, 'Failed', 'August 3, 2012 5:26 PM'),
  createData("RTL1_BPNA", 'SMS', 'Pengingat Pagi', 121223, 'Pending', 'October 12, 2018 1:47 AM'),
  createData("KUI_AICE", 'Email', 'Test', 958433, 'Progress', 'March 13, 2016 5:25 PM'),
  createData("RTL1_BANKBJB", 'Email', 'Coba', 3313, 'Failed', 'July 14, 2019 8:39 PM'),
  createData("IMTN_BCA", 'Call', 'Reminding Billing 20 September', 600, 'Failed', 'August 3, 2012 5:26 PM'),
  createData("RTL1_BPNA", 'SMS', 'Pengingat Pagi', 121223, 'Pending', 'October 12, 2018 1:47 AM'),
  createData("MTN_EGY-LIFE", 'Call', 'Reminding Billing 20 September', 1255, 'Success', 'July 15, 2018 4:47 AM'),
  createData("KUI_AICE", 'Email', 'Test', 958433, 'Progress', 'March 13, 2016 5:25 PM'),
  createData("RTL1_BANKBJB", 'Email', 'Coba', 3313, 'Failed', 'July 14, 2019 8:39 PM'),
  createData("RTL1_BPNA", 'SMS', 'Pengingat Pagi', 121223, 'Pending', 'October 12, 2018 1:47 AM'),
  createData("MTN_EGY-LIFE", 'Call', 'Reminding Billing 20 September', 1255, 'Success', 'July 15, 2018 4:47 AM'),
];

function getStatusText(status){
  if(status === "Progress"){
    return "#41AFFF"
  }else if(status === "Pending"){
    return "#F3A356"
  }else if(status === "Success"){
    return "#61C378"
  }else if(status === "Failed"){
    return "#DA5E5B"
  }
  return null
}

const SimpleTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table
        className={classes.table}
        style={{ tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow className={classes.tableHeadTitle}>
            <TableCell>Id Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Campaign</TableCell>
            <TableCell>Total Blast</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.idname} className={classes.tableBodyItem}>
              <TableCell component="th" scope="row">
                {row.idname}
              </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.campaign}</TableCell>
              <TableCell align="center">{row.totalblast}</TableCell>
              <TableCell align="center" style={{color: getStatusText(`${row.status}`) }}>{row.status}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
