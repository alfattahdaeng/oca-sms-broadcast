// import { MaterialUIComponentsNavigation } from "../pages/documentation/material-ui-components/MaterialUIComponentsNavigation";
import sms from '../assets/sms-icon.svg';
import home from '../assets/home-icon.svg';


const navigationConfig = [
  {
    id: "Main",
    title: "",
    type: "group",
    children: [
      {
        id: "home",
        title: "Home",
        type: "item",
        icon: home,
        url: "/dashboard",
        exact: true,
      },
      {
        id: "sms",
        title: "SMS",
        type: "collapse",
        icon: sms,
        children: [
          {
            id: "broadcast",
            title: "Broadcast",
            type: "item",
            url: "/sms/broadcast",
            exact: true,
          },
          {
            id: "scheduler",
            title: "SMS Scheduller",
            type: "item",
            url: "/sms/scheduler",
            exact: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
