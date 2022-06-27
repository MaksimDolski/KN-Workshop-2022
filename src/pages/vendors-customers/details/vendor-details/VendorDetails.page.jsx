import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";

import { VendorPanel } from "pages/vendors-customers/panels/vendor-panel";
import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { vendorService } from "api";
import { useLocalStateAlerts } from "hooks";

export const VendorDetailsPage = () => {
  const { id } = useParams();
  const vendorId = parseInt(id);
  const navigate = useNavigate();
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const [vendor, setVendor] = useState();

  useEffect(() => {
    const fetchVendor = async () => {
      const { data } = await vendorService.getVendorById(vendorId);
      setVendor(data);
    };
    fetchVendor();
  }, []);

  if (!vendor) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  const onSaveVendor = async updatedVendor => {
    const { data } = await vendorService.updateVendor({
      id: vendorId,
      body: updatedVendor,
    });
    setVendor(vendor => ({ ...vendor, ...data }));
    setSuccessMessage("Vendor Updated");
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
                    <h3 className="mb-0">Vendor Details</h3>
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
                <VendorPanel vendor={vendor} onSave={onSaveVendor} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
