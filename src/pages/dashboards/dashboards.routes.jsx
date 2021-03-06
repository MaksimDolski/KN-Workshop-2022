import { ChartsPage, WorldOverviewPage } from ".";

export const dashboardMenu = [
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    key: "DashboardMenu",
    path: "DashboardMenu",

    views: [
      {
        path: "/statistics",
        name: "Charts",
        miniName: "C",
        component: <ChartsPage />,
        layout: "/admin",
        key: "Dashboard/Charts",
      },
      {
        path: "/world-map",
        name: "World Map",
        miniName: "WM",
        component: <WorldOverviewPage />,
        layout: "/admin",
        key: "Dashboard/World Map",
      },
    ],
  },
];
