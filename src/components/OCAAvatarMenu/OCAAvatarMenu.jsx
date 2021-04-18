import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  Hidden
} from "@material-ui/core";

import OCAAvatarBadge from "../OCAAvatarBadge/OCAAvatarBadge";
import { AccountCircle, Settings, ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline"
  },
  menuIcon: {
    minWidth: "33px"
  },
  paddingRightZero: {
    paddingRight: 0,
    '&:hover': {
      backgroundColor: "transparent",
    },
  },
  menuName: {
    marginRight: "10px",
    textAlign: "right",
  },
  userName: {
    fontSize: "15px",
    fontWeight: "Bold",
  },
  userEmail:{
    fontSize: "13px",
    display: "inline"
  },
  userAvatar: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  fullwidth: {
    width: '100%',
  }
}));

const OCAAvatarMenu = props => {
  const classes = useStyles(props);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alignItems="flex-start"
        className={classes.paddingRightZero}
      > 
        <Hidden implementation="css" smDown className={classes.menuName}>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" className={classes.userName}>
                  Hi, Adjie!
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.userEmail}
                  color="textPrimary"
                >
                  Adjie_g4nt3ng@banget.com
                </Typography>
              </React.Fragment>
            }
          />
        </Hidden>
        <ListItemAvatar className={classes.userAvatar}>
          <OCAAvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            variant="dot"
          >
            <Avatar
              src=".../assets/avatar.png"
            />
          </OCAAvatarBadge>
        </ListItemAvatar>
        
      </ListItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={'bottom-end'}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    <Link href="/auth/login">Logout</Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

OCAAvatarMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default OCAAvatarMenu;
