import React from "react";
import { ListItem, ListItemIcon, ListItemText, Icon } from "@material-ui/core";

const OCANavLink = props => {
  const { item } = props;
  return (
    <ListItem
      button
      component="a"
      href={item.url}
      target={item.target ? item.target : "_blank"}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default OCANavLink;
