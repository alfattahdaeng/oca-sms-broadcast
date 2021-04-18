import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../OCA-configs/routesConfig";

const OCARoutes = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
};

export default OCARoutes;
