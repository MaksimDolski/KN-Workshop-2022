import { TwoMouseEventActionButtons } from "components/widgets";

export const vendorsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "сompanyName",
      Header: "Company Name",
    },
    {
      accessor: "address",
      Header: "Address",
    },
    {
      accessor: "phone",
      Header: "Phone",
    },
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "email",
      Header: "Email",
    },
    {
      accessor: "vendorType",
      Header: "Vendor Type",
    },
    {
      accessor: "webpage",
      Header: "Webpage",
    },
    {
      accessor: "dataCreated",
      Header: "Data Created",
    },
    {
      accessor: "rate",
      Header: "Hourly Rate",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
