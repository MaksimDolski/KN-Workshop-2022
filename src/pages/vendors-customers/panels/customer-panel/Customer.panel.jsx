import { Button, Col, Form, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const CustomerPanel = ({ customer, onSave }) => {
  const onSaveCustomer = () => {
    const newCustomer = {
      ...customer,
    };
    onSave(newCustomer);
  };

  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Customer Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <InputField
              id="customerName"
              label="Customer Name"
              value={customer.customerName}
              type="text"
            />
          </Col>
          <Col lg="6">
            <InputField id="address" label="Address" value={customer.address} type="text" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <InputField id="phone" label="Phone" value={customer.phone} type="text" />
          </Col>
          <Col lg="6">
            <InputField id="webpage" label="Webpage" value={customer.webpage} type="text" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <InputField id="email" label="Email" value={customer.email} type="text" />
          </Col>
          <Col lg="6">
            <InputField
              id="customerType"
              label="Customer Type"
              value={customer.customerType}
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <InputField id="rate" label="Hourly Rate" value={customer.rate} type="text" />
          </Col>
          <Col lg="6">
            <InputField
              id="description"
              label="Description"
              value={customer.description}
              type="text"
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Billing Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <InputField id="billingName" label="Name" value={customer.billingName} type="text" />
          </Col>
          <Col lg="6">
            <InputField id="currency" label="Currency" value={customer.currency} type="text" />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="billingAddress"
              label="Address"
              value={customer.billingAddress}
              type="text"
            />
          </Col>
          <Col lg="4">
            <InputField
              id="billingAddress2"
              label="Address Line 2"
              value={customer.billingAddress2}
              type="text"
            />
          </Col>
          <Col lg="4">
            <InputField
              id="billingAddress3"
              label="Address Line 3"
              value={customer.billingAddress3}
              type="text"
            />
          </Col>
        </Row>
      </div>
      <div className="pl-lg-4 mt-4 mb-4">
        <Row>
          <Button color="primary" type="button" onClick={onSaveCustomer}>
            Update Customer
          </Button>
        </Row>
      </div>
    </Form>
  );
};
