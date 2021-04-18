import React from "react";
import { Paper, Grid, makeStyles,  Button, TextField, Typography} from "@material-ui/core";
import logo from '../../../assets/oca-color-logo.svg'
import patternOCA from '../../../assets/pattern.png'

const useStyles = makeStyles(theme => ({
  root: {
    background: "#ED1260",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  mBottom: {
    marginBottom: ".5rem"
  },
  buttonPrimary: {
    marginTop: ".85rem",
    color: "#fff",
    backgroundColor: "#ED1260",
    textTransform: 'capitalize',
    '&:hover':{
      backgroundColor: "#f11865",
    }
  },
  logoLogin: {
    marginBottom: '65px',
    '& img': {
      [theme.breakpoints.down("md")]: {
        width: '100%',
      },
    }
  },
  loginWell: {
    color: "#4F4F4F",
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 'bold',
    marginBottom: '25px',
  },
  loginCard: {
    maxWidth: "332px",
    borderRadius: 5,
    background: "#fff",
    padding: ".85rem",
    margin: '0 auto',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.down("md")]: {
      padding: '40px',
    },
  },
  loginPageForm: {
    background: "#fff",
    height: '100%',
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#ED1260",
      padding: '0 30px',
    },
    '& input':{
      border: '1px solid rgb(223 224 235 / 80%)',
      padding: '10px 14px',
      borderRadius: '5px',
      fontSize: '13px',
      fontWeight: 'bold',
      '&::placeholder': {
        color: '#afadad',
        fontStyle: 'italic',
        letterSpacing: '0.002em',
      }
    },
    '& .MuiInput-formControl':{
      marginTop: '25px',
      '&::before': {
        display: 'none'
      },
      '&::after': {
        display: 'none'
      }
    },
    '& .MuiFormLabel-root.Mui-focused':{
      color: "#ED1260",
    },
    '& .MuiInput-formControl.Mui-focused input':{
      border: '1px solid #ED1260',
    },
    '& label':{
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '15px',
      color: 'rgba(154, 154, 154, 0.4)',
    }
  },
  patternContainer: {
    [theme.breakpoints.down("md")]: {
      display: 'none',
    },
  },
  patternLogin: {
    position: 'relative',
    backgroundImage: `url(${patternOCA})`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'right',
    backgroundSize: '152%',
    backgroundRepeat: 'no-repeat',
  },
  fp: {
    position: 'relative',
  },
  forgot: {
    textTransform: 'capitalize',
    color: 'rgba(154, 154, 154, 0.4)',
    fontWeight: 'bold',
    borderLeft: '1px solid #D7D7D7',
    borderRadius: 0,
    padding: '0 10px',
    position: 'absolute',
    right: 0,
    bottom: '11px',
    zIndex: 1,
    '&:hover':{
      backgroundColor: 'transparent',
      color: 'rgba(154, 154, 154, 1)',
    }
  }
}));

const LoginPage = props => {
  const classes = useStyles();
  const { history } = props;

  return (
    <div className={classes.root}>
      <Grid item container xs={12}>
        <Grid item xs={12} lg={5}>
          <Paper className={classes.loginPageForm} variant="outlined">
            <div className={classes.loginCard}>
              <div className={classes.logoLogin}>
                <img src={logo} alt="OCA Logo"/>
              </div>
              <Typography className={classes.loginWell} variant="body1">
                Welcome Back, Please login into your account
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  label="Username / Email"
                  margin="dense"
                  placeholder="Enter your email"
                  value="Adjie_g4ant3ng@banget.com"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <div className={classes.fp}>
                  <TextField
                    label="Password"
                    type="password"
                    margin="dense"
                    placeholder="Enter your password"
                    value="12345678"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <Button
                    className={classes.forgot}
                    onClick={() => history.push("/dashboard")}
                  >
                    Forgot?
                  </Button>
                </div>
                <div className={classes.mBottom}>
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.buttonPrimary}
                    onClick={() => history.push("/dashboard")}
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={7} className={classes.patternContainer}>
            <div className={classes.patternLogin}>
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
