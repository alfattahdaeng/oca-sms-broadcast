import React from "react";

import OCANavCollapse from "./OCANavCollapse";
import OCANavItem from "./OCANavItem";
import OCANavLink from "./OCANavLink";
import { ListSubheader } from "@material-ui/core";

const OCANavGroup = props => {
  const { item } = props;

  return (
    <>
      <ListSubheader>{item.title}</ListSubheader>

      {item.children && (
        <React.Fragment>
          {item.children.map(item => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <NavGroup item={item} />}

              {item.type === "collapse" && <OCANavCollapse item={item} />}

              {item.type === "item" && <OCANavItem item={item} />}

              {item.type === "link" && <OCANavLink item={item} />}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </>
  );
};

const NavGroup = React.memo(OCANavGroup);

export default NavGroup;
