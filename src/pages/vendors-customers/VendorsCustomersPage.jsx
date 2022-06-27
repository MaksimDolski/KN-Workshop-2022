import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, CardHeader, Container, Row, Button, Col } from "reactstrap";

import { BoxHeader } from "components/headers";

import { SearchCustomersPage } from "./search/search-customers";
import { SearchVendorsPage } from "./search/search-vendors";
import { CREATE_VENDOR_PAGE, CREATE_CUSTOMER_PAGE } from "./vendorsCustomers.routes.const";

export const VendorsCustomersPage = () => {
  const navigate = useNavigate();

  // for the <GlobalFilter /> in <ReactTable />
  const [option, setOption] = useState(null);
  const [colorBtn, setColorBtn] = useState("");
  const [vendorClassName, setVendorClassName] = useState("btn btn-primary active");
  const [customerClassName, setCustomerClassName] = useState(
    "btn btn-secondary bg-white text-gray"
  );

  // initial {option} is null, but after first rendering comes to true
  useEffect(() => {
    setOption(true);
  }, []);

  function handleVendorsClick() {
    setOption(true);
    setColorBtn("primary");
    setVendorClassName("btn btn-primary active");
    setCustomerClassName("btn btn-secondary bg-white text-gray");
  }

  function handleCustomersClick() {
    setOption(false);
    setCustomerClassName("btn btn-primary active");
    setVendorClassName("btn btn-secondary bg-white text-gray");
  }

  return (
    <>
      <div className="vendors-customers">
        <BoxHeader />
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Vendors and customers page</h3>
                </CardHeader>
                {/* vendor and customer buttons */}
                <Row className="m-3 justify-content-between mb-4 mt-4">
                  <Col>
                    <div className="btn-group d-inline-flex" role="group">
                      <Button
                        className={vendorClassName}
                        id="vendor"
                        color={colorBtn}
                        type="button"
                        onClick={handleVendorsClick}
                      >
                        Vendors
                      </Button>
                      <Button
                        className={customerClassName}
                        id="customer"
                        color={colorBtn}
                        type="button"
                        onClick={handleCustomersClick}
                      >
                        Customers
                      </Button>
                    </div>
                  </Col>
                  <div className="d-inline-flex">
                    <Col>
                      <Button
                        id="optionBtn"
                        color="primary"
                        type="button"
                        className="rounded-pill"
                        onClick={
                          option == true
                            ? () => navigate(`/admin${CREATE_VENDOR_PAGE}`)
                            : () => navigate(`/admin${CREATE_CUSTOMER_PAGE}`)
                        }
                      >
                        {option == true ? "+ Vendor" : "+ Customer"}
                      </Button>
                    </Col>
                  </div>
                </Row>
                {/* vendor/customer table */}
                {option ? (
                  <SearchVendorsPage option={option} />
                ) : (
                  <SearchCustomersPage option={option} />
                )}
                <CardBody />
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
