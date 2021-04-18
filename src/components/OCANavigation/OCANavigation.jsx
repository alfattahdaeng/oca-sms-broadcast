import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import navigationConfig from "../../OCA-configs/navigationConfig";

import OCANavGroup from "./sections/OCANavGroup";
import OCANavCollapse from "./sections/OCANavCollapse";
import OCANavItem from "./sections/OCANavItem";
import OCANavLink from "./sections/OCANavLink";
import clsx from "clsx";
import logo from '../../assets/oca-white-logo.svg';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  toolbarCustom: {
    paddingTop: "35px",
  },
  logoHeader: {
    display: "block",
    margin: "0 auto",
    padding: "19px 0",
  },
  logo: {
    padding: "1rem",
    "& span": {
      display: "block",
      color: "rgba(41, 113, 245, 0.87)",
    },
  },
  navCustom: {
    marginTop: "8em",
    "& .MuiTypography-root": {
      fontSize: "14px",
      fontWeight: "600",
      display: "inline-block",
      paddingBottom: "4px",
      borderBottom: '3px solid transparent',
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
      marginTop: '-8px',
    },
    "& .MuiSvgIcon-root":{
      marginTop: '-7.5px',
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "62px",
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '29px',
        top: 0,
        height: '25px',
        width: '24px',
        borderColor: '#fff',
        borderLeft: '1px solid',
        borderBottom: '1px solid',
        borderBottomLeftRadius: '10px',
      }
    },
    "& .MuiListItem-gutters":{
      paddingRight: "22px",
      paddingLeft: "22px",
    },
  },
}));

const OCANavigation = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <div className={clsx(classes.toolbar, classes.toolbarCustom)}>
          <img src={logo} alt="OCA Logo" className={classes.logoHeader}/>
      </div>
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <OCANavGroup item={item} />}

            {item.type === "collapse" && <OCANavCollapse item={item} />}

            {item.type === "item" && <OCANavItem item={item} />}

            {item.type === "link" && <OCANavLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default OCANavigation;
