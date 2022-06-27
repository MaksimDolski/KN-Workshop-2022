import { CreateCustomerPage } from "./create/create-customer";
import { CreateVendorPage } from "./create/create-vendor";
import { CustomerDetailsPage } from "./details/customer-details";
import { VendorDetailsPage } from "./details/vendor-details";
import {
  VENDORS_CUSTOMERS_PAGE,
  CREATE_VENDOR_PAGE,
  CREATE_CUSTOMER_PAGE,
  CUSTOMER_DETAILS,
  VENDOR_DETAILS,
} from "./vendorsCustomers.routes.const";
import { VendorsCustomersPage } from "./VendorsCustomersPage";

export const vendorsCustomersMenu = [
  {
    collapse: false,
    path: VENDORS_CUSTOMERS_PAGE,
    icon: "ni ni-circle-08 text-info",
    component: <VendorsCustomersPage />,
    layout: "/admin",
    name: "Vendors & Customers",
    miniName: "M",
    key: VENDORS_CUSTOMERS_PAGE,
  },
  {
    collapse: false,
    global: true,
    path: CREATE_VENDOR_PAGE,
    component: <CreateVendorPage />,
    layout: "/admin",
    name: "Create Vendor",
    miniName: "CVP",
    key: CREATE_VENDOR_PAGE,
  },
  {
    collapse: false,
    global: true,
    path: CREATE_CUSTOMER_PAGE,
    component: <CreateCustomerPage />,
    layout: "/admin",
    name: "Create Customer",
    miniName: "CCP",
    key: CREATE_CUSTOMER_PAGE,
  },
  {
    collapse: false,
    global: true,
    miniName: "CD",
    path: `${CUSTOMER_DETAILS}/:id`,
    component: <CustomerDetailsPage />,
    layout: "/admin",
    name: `${CUSTOMER_DETAILS}/:id`,
    key: `${CUSTOMER_DETAILS}/:id`,
  },
  {
    collapse: false,
    global: true,
    miniName: "VD",
    path: `${VENDOR_DETAILS}/:id`,
    component: <VendorDetailsPage />,
    layout: "/admin",
    name: `${VENDOR_DETAILS}/:id`,
    key: `${VENDOR_DETAILS}/:id`,
  },
];
