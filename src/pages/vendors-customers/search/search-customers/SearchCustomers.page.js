import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { deleteCustomer, searchCustomers, selectAllCustomerData } from "redux/features";

import { ReactTable } from "components/widgets";

import { CUSTOMER_DETAILS } from "pages/vendors-customers";

import { SearchCustomersFilterPanel } from "./SearchCustomers.filter";
import { customersTableColumns } from "./SearchCustomers.table";

export const SearchCustomersPage = ({ option }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customers = useSelector(selectAllCustomerData);

  const onSearchCustomers = async filters => {
    dispatch(searchCustomers(filters));
  };

  const onViewCustomerDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${CUSTOMER_DETAILS}/${id}`);
  };

  const onDeleteCustomer = async e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    dispatch(deleteCustomer(parseInt(id)));
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
