import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import OCANavigation from "../../components/OCANavigation/OCANavigation";
import NavigationContext from "../../context/NavigationContext";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props) => props.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: (props) => props.drawerWidth,
    "& *": {
      color: "#FFFFFF",
    },
  },
}));

const MenuDrawer = (props) => {
  const classes = useStyles(props);
  const { open } = React.useContext(NavigationContext);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <OCANavigation />
    </Drawer>
  );
};

export default MenuDrawer;
