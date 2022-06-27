import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { ReactTable } from "components/widgets";

import { CUSTOMER_DETAILS } from "pages/vendors-customers";

import { customerService } from "api";

import { SearchCustomersFilterPanel } from "./SearchCustomers.filter";
import { customersTableColumns } from "./SearchCustomers.table";

export const SearchCustomersPage = ({ option }) => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  const onSearchCustomers = async filters => {
    const queryParams = new URLSearchParams(filters);
    const { data } = await customerService.searchCustomers(queryParams);
    setCustomers(data);
  };

  const onViewCustomerDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${CUSTOMER_DETAILS}/${id}`);
  };

  const onDeleteCustomer = async e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    await customerService.deleteCustomer(parseInt(id));
    setCustomers(customers.filter(customer => customer.id !== parseInt(id)));
  };

  return (
    <>
      <Container fluid>
        <Row>
          <div className="col">
            <SearchCustomersFilterPanel onSearchCustomers={onSearchCustomers} />
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader className="mb-3">
                <h3 className="mb-0">Customers</h3>
                <p className="text-sm mb-0">You can find all the Customers information below</p>
              </CardHeader>
              <ReactTable
                option={option}
                data={customers}
                columns={customersTableColumns({
                  onDetailsButtonClick: onViewCustomerDetails,
                  onRemoveButtonClick: onDeleteCustomer,
                })}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
