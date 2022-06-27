import { TwoMouseEventActionButtons } from "components/widgets";

export const customersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "customerName",
      Header: "Customer Name",
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
      accessor: "email",
      Header: "Email",
    },
    {
      accessor: "customerType",
      Header: "Customer Type",
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
