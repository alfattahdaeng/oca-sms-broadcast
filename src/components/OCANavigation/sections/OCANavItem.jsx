import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import NavLinkAdapter from "../../NavLinkAdapter/NavLinkAdapter";

const useStyles = makeStyles(theme => ({
  menuActive: {
    "& .MuiTypography-root": {
      borderBottom: '3px solid #fff !important',
    },
  },
}));

const OCANavItem = props => {
  const classes = useStyles();
  const { item } = props;

  return (
    <ListItem
      button
      component={NavLinkAdapter}
      to={item.url}
      activeClassName={classes.menuActive}
      exact={item.exact}
    >
      {item.icon && (
        <ListItemIcon>
            <img src={item.icon} alt=""/>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default OCANavItem;
