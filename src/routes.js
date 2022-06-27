import { dashboardMenu } from "pages/dashboards";
import { documentsMenu } from "pages/documents";
import { groupMenu } from "pages/groups";
import { homeMenu } from "pages/home";
import { userMenu } from "pages/users";
import { vendorsCustomersMenu } from "pages/vendors-customers";

export const routes = [
  ...homeMenu,
  ...userMenu,
  ...groupMenu,
  ...dashboardMenu,
  ...documentsMenu,
  ...vendorsCustomersMenu,
];
