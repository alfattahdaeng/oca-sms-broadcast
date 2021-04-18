import React from "react";
import { Redirect } from "react-router-dom";

import { DashboardPageConfig } from "../pages/dashboard/DashboardPageConfig";
import { SchedulerPageConfig } from "../pages/sms/scheduler/SchedulerPageConfig";
import { BroadcastPageConfig } from "../pages/sms/broadcast/BroadcastPageConfig";
import { LoginPageConfig } from "../pages/auth/login/LoginPageConfig";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...BroadcastPageConfig.routes,
  ...SchedulerPageConfig.routes,
  ...LoginPageConfig.routes,
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/auth/login" />
  }
];

export default routes;
