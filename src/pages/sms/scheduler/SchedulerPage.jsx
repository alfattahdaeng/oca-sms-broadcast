import React from "react";

import OCALayout from "../../../components/OCALayout/OCALayout";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import clsx from "clsx";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import seleIcon from "../../../assets/select-icon.png";
import seleIconGray from "../../../assets/select-icon-gray.png";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  my3: {
    margin: "1.3rem 0"
  },
  mb3: {
    margin: "1.3rem 0"
  },
  mb0: {
    marginBottom: 0
  },
  mRight: {
    marginRight: ".85rem"
  },
  p1: {
    padding: ".85rem"
  },
  titleShadow: {
    fontWeight: '900',
    fontSize: '32px',
    letterSpacing: '0.002em',
    color: '#3D3D3D',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '20px',
  },
  inputPageForm: {
    marginBottom: '50px',
    background: "#fff",
    height: '100%',
    position: 'relative',
    zIndex: '2',
    '& input':{
      border: '1px solid rgb(223 224 235 / 80%)',
      padding: '10px 14px',
      borderRadius: '5px',
      fontSize: '14px',
      '&::placeholder': {
        color: '#afadad',
        fontStyle: 'italic',
        letterSpacing: '0.002em',
      }
    },
    '& textarea':{
      border: '1px solid rgb(223 224 235 / 80%)',
      padding: '10px 14px',
      borderRadius: '5px',
      fontSize: '14px',
      height: '152px !important',
      width: '700px !important',
      '&::placeholder': {
        color: '#afadad',
        fontStyle: 'italic',
        letterSpacing: '0.002em',
      },
      [theme.breakpoints.down("sm")]: {
        width: '240px !important',
      },
    },
    '& .MuiSelect-select':{
      border: '1px solid rgb(223 224 235 / 80%)',
      padding: '10px 14px',
      borderRadius: '5px',
      fontSize: '14px',
      width: '240px',
      display: 'block',
      '&::placeholder': {
        color: '#afadad',
        fontStyle: 'italic',
        letterSpacing: '0.002em',
      }
    },
    '& .MuiSelect-icon':{
      fill: '#ED1260',
      fontSize: '29px',
      top: 'calc(50% - 15px)',
      right: '8px',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: '#fff',
      border: '1px solid #ED1260',
    },
    '& .MuiInput-formControl':{
      marginTop: '30px',
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
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#4F5154',
    },
    '& .MuiCheckbox-root':{
      padding: '0 9px',
    },
    '& .MuiNativeSelect-select':{
      background: '#fff !important',
      border: '1px solid #979797',
      borderRadius: '3px',
      padding:'3px 24px 5px 9px',
      fontSize: '14px',
      '&:focus':{
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      },
    },
    '& .MuiNativeSelect-select.Mui-disabled':{
      background: '#E5E5E5 !important',
      color: '#979797',
      '&:focus':{
        filter: 'none',
      },
    },
  },
  mr10:{
    marginRight: '25px',
    [theme.breakpoints.down("md")]: {
      marginBottom: '24px',
    },
  },
  smallInput:{
    maxWidth: '270px',
    display: 'block',
    marginBottom: '24px',
  },
  spaceForm: {
    marginTop: '45px',
    marginBottom: '30px',
  },
  smallTitle:{
    fontWeight: 'bold',
    color: '#4F5154',
    [theme.breakpoints.down("md")]: {
      marginBottom: '15px',
    },
  },
  caption:{
    fontStyle: 'italic',
    fontWeight: '500',
    color: '#BBC1C8',
  },
  radioG:{
    marginTop: '22px',
    marginBottom: '60px',
  },
  in: {
    marginBottom: '20px',
  },
  inlineDiv:{
    display: 'inline-block',
  },
  firstDiv:{
    width: '130px',
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      marginBottom: '10px',
    },
  },
  secondDiv:{
    marginLeft: '5px',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '0px',
    },
    '& span':{
      margin: '0 4px',
      [theme.breakpoints.down("md")]: {
        marginBottom: '10px',
      },
    },
    '& div':{
      margin: '0 4px',
      [theme.breakpoints.down("md")]: {
        marginBottom: '10px',
      },
    },
    '& .MuiInput-underline':{
      '&:before':{
        display: 'none',
      },
      '&:after':{
        display: 'none',
      },
    },
    '& .MuiSvgIcon-root':{
      '& path':{
        display: 'none',
      },
      backgroundImage: `url(${seleIcon})`,
      backgroundPosition: 'center',
      backgroundSize: '8px',
      backgroundRepeat: 'no-repeat',
    },
    '& .Mui-disabled .MuiSvgIcon-root':{
      backgroundImage: `url(${seleIconGray})`,
    },
  },
  buttonRight:{
    marginLeft: 'auto',
    display: 'block',
    backgroundColor: '#E81255',
    borderRadius: '8px',
    textTransform: 'none',
    color: '#fff',
    padding: '10px 35px',
    fontWeight: 'bold',
    '&:hover':{
      backgroundColor: '#d40546',
    },  
    [theme.breakpoints.down("sm")]: {
      marginLeft: '0',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    marginBottom: '2px',
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#E81255',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#E81255',
    },
  },
  radioRoot: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  selectCustom:{
    '& em':{
      color: '#afadad',
    },
  },
  charWrap:{
  },
  charCount:{
    width: '730px',
    fontSize: '10px',
    color: '#C5C7CD',
    display: 'block',
    textAlign: 'right',
    [theme.breakpoints.down("sm")]: {
      width: '270px !important',
    },
  },
  Ic:{
    position: 'relative',
  },
  buttonWrap:{
    width: '730px',
    display: 'block',
    textAlign: 'right',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  }
}));
 
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.radioRoot}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
const SchedulerPage = props => {

  const classes = useStyles();
  const [phonenumber, setPhonenumber] = React.useState('');
  const handleChangePhone = (event) => {
    setPhonenumber(event.target.value);
  };
  const [stateCheck, setStateCheck] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChangeCheckBox = (event) => {
    setStateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
  };

  const [selectedRadio, setSelectedRadio] = React.useState('once');

  const handleChangeRadio = (event) => {
    setSelectedRadio(event.target.value);
  };

  const [oncetime, setOncetime] = React.useState('2');
  const handleChangeOncetime = (event) => {
    setOncetime(event.target.value);
  };
  const [intime, setIntime] = React.useState('2');
  const handleChangeIntime = (event) => {
    setIntime(event.target.value);
  };
  const [inevery, setInevery] = React.useState('6');
  const handleChangeInevery = (event) => {
    setInevery(event.target.value);
  };
  const [indur, setIndur] = React.useState('3');
  const handleChangeIndur = (event) => {
    setIndur(event.target.value);
  };

  return (
    <OCALayout>
      <Typography className={classes.titleShadow} variant="h1">
        SMS Scheduller
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={10}>
            <Grid item xs={12}>
            <div className={classes.inputPageForm}>
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.smallInput}
                  label="Broadcast Name"
                  placeholder="name of your broadcast"
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <FormControl className={clsx(classes.formControl, classes.smallInput)}>
                  <InputLabel shrink id="select-phone">
                  Phonebook
                  </InputLabel>
                  <Select
                    labelId="select-phone"
                    id="select-phone"
                    value={phonenumber}
                    onChange={handleChangePhone}
                    displayEmpty
                    className={classes.selectCustom}
                    IconComponent = {ExpandMoreRoundedIcon}
                  >
                    <MenuItem value="">
                      <em>Select your phonebook</em>
                    </MenuItem>
                    <MenuItem value={10}>+6282112345</MenuItem>
                    <MenuItem value={20}>+6285212345</MenuItem>
                    <MenuItem value={30}>+6288712345</MenuItem>
                    <MenuItem value={40}>+6287712345</MenuItem>
                    <MenuItem value={50}>+6283112345</MenuItem>
                  </Select>
                </FormControl>
                <div className={classes.charWrap}>
                  <TextField
                    id="textareas"
                    label="Messages"
                    multiline
                    rowsMax={10}
                    value="Halo Bili, perkenalkan kami OCA (Omni Communication Assistant). Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut kunjungi web kami"
                    InputLabelProps={{
                      shrink: true
                    }}
                    />
                  <span className={classes.charCount}>Character 303/1024</span>
                </div>

                <div className={classes.spaceForm}>
                  <Typography className={classes.smallTitle} variant="h6">
                      Schedule
                  </Typography>
                  <Typography className={classes.caption} variant="subtitle2">
                      When and how often do you want to broadcast this messages?
                  </Typography>
                </div>
                <Grid item container xs={12} className={classes.rowScheduler}>
                  <Grid item xs={12} md={2} className={classes.colScheduler}>
                      <Typography className={classes.smallTitle} variant="subtitle2">
                      Run On
                      </Typography>
                  </Grid>
                  <Grid item xs={12} md={10} className={classes.colScheduler}>
                    <FormGroup row>
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedA} onChange={handleChangeCheckBox} name="checkedA" />}
                        label="Mon"
                      />
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedB} onChange={handleChangeCheckBox} name="checkedB" />}
                        label="Tue"
                      />
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedC} onChange={handleChangeCheckBox} name="checkedC" />}
                        label="Wed"
                      />
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedD} onChange={handleChangeCheckBox} name="checkedD" />}
                        label="Thu"
                      />
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedE} onChange={handleChangeCheckBox} name="checkedE" />}
                        label="Fri"
                      />
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedF} onChange={handleChangeCheckBox} name="checkedF" />}
                        label="Sat"
                      />
                      <FormControlLabel className={classes.mr10}
                        control={<Checkbox checked={stateCheck.checkedG} onChange={handleChangeCheckBox} name="checkedG" />}
                        label="Sun"
                      />
                    </FormGroup>
                    <RadioGroup aria-label="time" name="time1" value={selectedRadio} onChange={handleChangeRadio} className={classes.radioG}>
                      <div className={classes.in}>
                          <FormControlLabel value="once" control={<StyledRadio />}  label="Once a day" className={clsx(classes.inlineDiv, classes.firstDiv)}/>
                            <div className={clsx(classes.inlineDiv, classes.secondDiv)}>
                              <span>At</span>
                                <NativeSelect disabled={selectedRadio === "interval"}
                                    value={oncetime}
                                    onChange={handleChangeOncetime}
                                    inputProps={{
                                      id: 'once-time',
                                    }}
                                    className={classes.Ic}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={1}>1 AM</option>
                                    <option value={2}>2 AM</option>
                                    <option value={3}>3 AM</option>
                                    <option value={4}>4 AM</option>
                                  </NativeSelect>
                              <span>WIB</span>
                            </div>
                      </div>

                      <div className={classes.in}>
                        <FormControlLabel value="interval" control={<StyledRadio />}  label="At Intervals"  className={clsx(classes.inlineDiv, classes.firstDiv)}/>
                            <div className={clsx(classes.inlineDiv, classes.secondDiv)}>
                              <span>Every</span>
                                <NativeSelect  disabled={selectedRadio === "once"}
                                    value={inevery}
                                    onChange={handleChangeInevery}
                                    inputProps={{
                                      id: 'interval-every',
                                    }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                  </NativeSelect>
                                  <NativeSelect disabled={selectedRadio === "once"}
                                    value={indur}
                                    onChange={handleChangeIndur}
                                    inputProps={{
                                      id: 'interval-dur',
                                    }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Seconds</option>
                                    <option value={2}>Minutes</option>
                                    <option value={3}>Hours</option>
                                    <option value={4}>Days</option>
                                  </NativeSelect>
                              <span>from</span>
                                <NativeSelect disabled={selectedRadio === "once"}
                                      value={intime}
                                      onChange={handleChangeIntime}
                                      inputProps={{
                                        id: 'interval-time',
                                      }}
                                    >
                                      <option aria-label="None" value="" />
                                      <option value={1}>1 AM</option>
                                      <option value={2}>2 AM</option>
                                      <option value={3}>3 AM</option>
                                      <option value={4}>4 AM</option>
                                    </NativeSelect>
                          </div>
                      </div>
                    </RadioGroup>
                  </Grid>
                </Grid>
                <div className={classes.buttonWrap}>
                  <Button variant="contained" className={classes.buttonRight}>
                    Send messages
                  </Button>
                </div>
              </form>
            </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </OCALayout>
  );
};

export default SchedulerPage;
