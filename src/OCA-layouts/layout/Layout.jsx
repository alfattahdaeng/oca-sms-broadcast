import React from "react";

import NavigationContext from "../../context/NavigationContext";
import MenuDrawer from "./MenuDrawer";

import Main from "./Main";
import Header from "./Header";

const handleDrawerResponsive = () => {
  if (window.innerWidth < 900) {
    return false;
  }

  return true;
};

const Layout = (props) => {
  const [open, setOpen] = React.useState(() => handleDrawerResponsive());

  React.useEffect(() => {
    window.addEventListener("resize", resizeChecker);

    return () => {
      window.addEventListener("resize", resizeChecker);
    };
  }, []);

  const resizeChecker = () => {
    if (handleDrawerResponsive()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavigationContext.Provider
      value={{
        open,
        handleDrawerToggle,
        value,
        handleChange,
      }}
    >
      <Header />
      <MenuDrawer drawerWidth={230} />
      <Main drawerWidth={230} />
    </NavigationContext.Provider>
  );
};

export default Layout;
