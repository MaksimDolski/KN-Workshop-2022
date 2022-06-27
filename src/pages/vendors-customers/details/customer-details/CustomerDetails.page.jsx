import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";

import { CustomerPanel } from "pages/vendors-customers/panels/customer-panel";
import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { customerService } from "api";
import { useLocalStateAlerts } from "hooks";

export const CustomerDetailsPage = () => {
  const { id } = useParams();
  const customerId = parseInt(id);
  const navigate = useNavigate();
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const [customer, setCustomer] = useState();

  useEffect(() => {
    const fetchCustomer = async () => {
      const { data } = await customerService.getCustomerById(customerId);
      setCustomer(data);
    };
    fetchCustomer();
  }, []);
  if (!customer) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  const onSaveCustomer = async updatedCustomer => {
    const { data } = await customerService.updateCustomer({
      id: customerId,
      body: updatedCustomer,
    });
    setCustomer(customer => ({ ...customer, ...data }));
    setSuccessMessage("Customer Updated");
    setSaveSent(true);
    setIsSuccess(true);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Customer Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-left">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
                    >
                      Back to Main
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <CustomerPanel customer={customer} onSave={onSaveCustomer} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
