import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase} from "@material-ui/core";
import OCAAvatarMenu from "../OCAAvatarMenu/OCAAvatarMenu";
import clsx from "clsx";
import NavigationContext from "../../context/NavigationContext";
import OCASearchIcon from "../../assets/search-icon.svg";


const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  spaceToolbar: {
    paddingLeft: "42px",
    paddinRight: "42px",
    paddingTop: "35px",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    border: "1px solid #efefef",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  inputRoot: {
    color: "#000",
  },
  inputInput: {
    padding: "10px 10px 13px 0",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    fontStyle: "italic",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "340px",
    },
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#4F5154',
      opacity: "1"
    }
  },
  appbarSection: {
    display: "flex",
    alignItems: "center",
  },
}));

const OCAAppBar = (props) => {
  const classes = useStyles(props);
  const { open, handleDrawerToggle } = React.useContext(
    NavigationContext
  );

  return (
    <AppBar
      elevation={0}
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={classes.spaceToolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <img src={OCASearchIcon} alt=""/>
          </div>
          <InputBase
            placeholder="Any help?"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.appbarSection}>
          <OCAAvatarMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

OCAAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default OCAAppBar;
