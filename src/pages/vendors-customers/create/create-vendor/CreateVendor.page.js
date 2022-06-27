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

export const CreateVendorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="create-vendor">
      <BoxHeader />
      <Container className="mt--6">
        <Row>
          <div className="col">
            {/* add vendor */}
            <Card>
              <CardHeader>
                <h3 className="mb-0">Add Vendor</h3>
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
                  <FormGroup>
                    <Label for="companyName">Company Name *</Label>
                    <Input id="companyName" name="companyName" placeholder="UpKeep" type="text" />
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
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Due" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" placeholder="john.due@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="vendorType">Vendor Type</Label>
                    <Input id="vendorType" name="vendorType" placeholder="Electrical" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Description the purpose of this business in a few lines..."
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
