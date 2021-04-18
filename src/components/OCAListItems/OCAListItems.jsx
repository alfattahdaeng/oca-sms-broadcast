import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import OCAListItemIcon from "./sections/OCAListItemIcon";
import OCAListItemAvatar from "./sections/OCAListItemAvatar";

const OCAListItems = props => {
  const { data, type, divider, button } = props;

  return (
    <>
      {data.map(item => (
        <ListItem divider={divider} button={button} key={item.id}>
          <React.Fragment>
            {type === "ListItemIcon" && <OCAListItemIcon item={item} />}

            {type === "ListItemAvatar" && <OCAListItemAvatar item={item} />}

            {type === "ListItemText" && (
              <ListItemText
                primary={item.title}
                secondary={item.subTitle ? item.subTitle : ""}
              />
            )}
          </React.Fragment>
        </ListItem>
      ))}
    </>
  );
};

export default OCAListItems;
