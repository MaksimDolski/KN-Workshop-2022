import { Button, Col, Form, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const VendorPanel = ({ vendor, onSave }) => {
  const onSaveVendor = () => {
    const newVendor = {
      ...vendor,
    };
    onSave(newVendor);
  };

  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Vendor Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <InputField
              id="сompanyName"
              label="Company Name"
              value={vendor.сompanyName}
              type="text"
            />
          </Col>
          <Col lg="6">
            <InputField id="address" label="Address" value={vendor.address} type="text" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <InputField id="phone" label="Phone" value={vendor.phone} type="text" />
          </Col>
          <Col lg="6">
            <InputField id="name" label="Name" value={vendor.name} type="text" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <InputField id="email" label="Email" value={vendor.email} type="text" />
          </Col>
          <Col lg="6">
            <InputField id="vendorType" label="Vendor Type" value={vendor.vendorType} type="text" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <InputField id="webpage" label="Webpage" value={vendor.webpage} type="text" />
          </Col>
          <Col lg="6">
            <InputField
              id="dataCreated"
              label="Data Created"
              value={vendor.dataCreated}
              type="text"
            />
          </Col>
          <Col lg="6">
            <InputField id="rate" label="Rate" value={vendor.rate} type="text" />
          </Col>
          <Col lg="6">
            <InputField
              id="description"
              label="Description"
              value={vendor.description}
              type="text"
            />
          </Col>
        </Row>
      </div>
      <div className="pl-lg-4 mt-4 mb-4">
        <Row>
          <Button color="primary" type="button" onClick={onSaveVendor}>
            Update Vendor
          </Button>
        </Row>
      </div>
    </Form>
  );
};
