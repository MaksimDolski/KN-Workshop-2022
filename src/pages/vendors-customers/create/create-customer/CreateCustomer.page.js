import { useNavigate } from "react-router-dom";

import {
  Card,
  Container,
  Row,
  Button,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  CardHeader,
} from "reactstrap";

import { BoxHeader } from "components/headers";

import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

export const CreateCustomerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="create-customer">
      <BoxHeader />
      <Container className="mt--6">
        <Row>
          <div className="col">
            {/* add customer */}
            <Card>
              <CardHeader>
                <h3 className="mb-0">Add Customer</h3>
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
              <Form>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>
                  <FormGroup>
                    <Label for="customerName">Customer Name *</Label>
                    <Input id="customerName" name="customerName" placeholder="UpKeep" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+372 432 432" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="webpage">Webpage</Label>
                    <Input id="webpage" name="webpage" placeholder="www.webpage.com" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" placeholder="john.due@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customerType">Customer Type</Label>
                    <Input
                      id="customerType"
                      name="customerType"
                      placeholder="Electrical"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Describe the purpose of this customer in a few lines..."
                      type="textarea"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="rate">Rate</Label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <Input
                        id="rate"
                        name="rate"
                        placeholder="Rate"
                        type="text"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">per hour</span>
                      </div>
                    </div>
                    <p className="small">
                      Changes will only apply to Work Orders created in the future
                    </p>
                  </FormGroup>
                  <h2 className="pb-2">Billing Information</h2>
                  <FormGroup>
                    <Label for="billingName">Name</Label>
                    <Input id="billingName" name="billingName" placeholder="John Doe" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress">Address</Label>
                    <Input
                      id="billingAddress"
                      name="billingAddress"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress2">Address Line 2</Label>
                    <Input
                      id="billingAddress2"
                      name="billingAddress2"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress3">Address Line 3</Label>
                    <Input
                      id="billingAddress3"
                      name="billingAddress3"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="currency">Currency</Label>
                    <div className="input-group">
                      <select className="custom-select" id="currency">
                        <option selected>Select Currency</option>
                        <option value="1">Dollars</option>
                        <option value="2">EUR</option>
                      </select>
                    </div>
                  </FormGroup>
                  <div className="header-buttons mt-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="danger">Submit</Button>
                  </div>
                </Col>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
