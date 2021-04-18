import React from "react";
import OCALayout from "../../components/OCALayout/OCALayout";
import { Paper, Grid, makeStyles, Typography} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import SimpleTable from "./components/SimpleTable";
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  tableBox: {
    padding: '18px 25px',
    boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
  },
  titlePaper: {
    marginBottom: "16px",
  },
  welcomeBanner: {
    borderRadius: '8px',
    borderTop: '7px solid #ED1260',
    padding: '33px 22px',
    marginBottom: '35px',
  },
  titleWelcome: {
    fontWeight: 'bold',
  },
  captionWelcome: {
    fontSize: "16px",
  },
  titleQuota: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
    marginBottom: '16px',
  },
  rowQuota: {
  },
  colQuota: {
    padding: '0 10px',
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      paddingRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: '0',
      marginBottom: '15px',
    },
  },
  itemQuota: {
    padding: '15px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleItem:{
    fontWeight: '500',
    letterSpacing: '0.01em',
    color: '#777777',
  },
  valueItem:{
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'right',
    letterSpacing: '0.01em',
  },
  call:{
    color: '#22B9FF',
  },
  message:{
    color: '#FFB822',
  },
  mail:{
    color: '#F554E9',
  },
  whatsapp:{
    color: '#1DC9B7',
  },
  recentNav: {
    padding: '13px 0',
    borderBottom: '0.75px solid #DDDDE4',
    marginBottom: '10px',
  },
  titleRecent: {
    fontWeight: 'bold',
    color: '#ED1260',
  },
  sortfilterRecent: {
    textAlign: 'right',
    '& ul': {
      padding: '0',
      margin:'0',
      listStyle: 'none',
    },
    '& li': {
      display: 'inline-block',
      fontSize: '14px',
      color: '#4B506D',
      marginRight: '13px',
      '&:hover': {
        cursor: 'pointer',
        color: '#ED1260',
        '& span': {
          color: '#ED1260',
        }
      },
    },
    '& li span': {
      color: '#C5C7CD',
      fontSize: '12px',
      marginRight: '5px',
    },

  }
}));

const DashboardPage = (props) => {
  const classes = useStyles();
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <OCALayout>
      <Grid container spacing={2}>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Paper className={classes.welcomeBanner} variant="outlined">
              <Typography className={classes.titleWelcome} variant="h5">
                Hello, Welcome to OCA!
              </Typography>
              <Typography className={classes.captionWelcome} variant="subtitle2">
                Let’s start make some noise and make your campaign great again! <NavLink to="/pages/sms" style={{ textDecoration: 'none', color: '#ED1260' }} >click here</NavLink > to spread your messages.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Typography className={classes.titleQuota} variant="h6">
            Remaining Quota
          </Typography>
          <Grid item container xs={12} className={classes.rowQuota}>
            <Grid item xs={12} sm={6}  md={3} className={classes.colQuota}>
              <Paper className={classes.itemQuota} variant="outlined">
                <Typography className={classes.titleItem} variant="subtitle2">
                  Call
                </Typography>
                <Typography className={clsx(classes.valueItem, classes.call)}>
                  4840 seconds
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}className={classes.colQuota}>
              <Paper className={classes.itemQuota} variant="outlined">
                <Typography className={classes.titleItem} variant="subtitle2">
                  SMS
                </Typography>
                <Typography className={clsx(classes.valueItem, classes.message)}>
                  1245 messages
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.colQuota}>
              <Paper className={classes.itemQuota} variant="outlined">
                <Typography className={classes.titleItem} variant="subtitle2">
                  Email
                </Typography>
                <Typography className={clsx(classes.valueItem, classes.mail)}>
                  7710 mails
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.colQuota}>
              <Paper className={classes.itemQuota} variant="outlined">
                <Typography className={classes.titleItem} variant="subtitle2">
                  Whatsapp
                </Typography>
                <Typography className={clsx(classes.valueItem, classes.whatsapp)}>
                  330 messages
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.mt, classes.tableBox)}
              variant="outlined"
            > 
              <Grid item container xs={12} className={classes.recentNav}>
                <Grid item xs={3}>
                  <Typography className={classes.titleRecent} variant="subtitle2">
                    Recent BLAST
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.sortfilterRecent} >
                      <ul>
                        <li><Icon className="fas fa-sort-amount-up"/> Sort</li>
                        <li><Icon className="fas fa-filter"/> Filter</li>
                      </ul>
                  </div>
                </Grid>
              </Grid>
              <SimpleTable />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </OCALayout>
  );
};

export default DashboardPage;
