import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { ReactTable } from "components/widgets";

import { VENDOR_DETAILS } from "pages/vendors-customers";

import { vendorService } from "api";

import { SearchVendorsFilterPanel } from "./SearchVendors.filter";
import { vendorsTableColumns } from "./SearchVendors.table";

export const SearchVendorsPage = ({ option }) => {
  const navigate = useNavigate();

  const [vendors, setVendors] = useState([]);

  const onSearchVendors = async filters => {
    const queryParams = new URLSearchParams(filters);
    const { data } = await vendorService.searchVendors(queryParams);
    setVendors(data);
  };

  const onViewVendorDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${VENDOR_DETAILS}/${id}`);
  };

  const onDeleteVendor = async e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    await vendorService.deleteVendor(parseInt(id));
    setVendors(vendors.filter(vendor => vendor.id !== parseInt(id)));
  };

  return (
    <>
      <Container fluid>
        <Row>
          <div className="col">
            <SearchVendorsFilterPanel onSearchVendors={onSearchVendors} />
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader className="mb-3">
                <h3 className="mb-0">Vendors</h3>
                <p className="text-sm mb-0">You can find all the Vendors information below</p>
              </CardHeader>
              <ReactTable
                option={option}
                data={vendors}
                columns={vendorsTableColumns({
                  onDetailsButtonClick: onViewVendorDetails,
                  onRemoveButtonClick: onDeleteVendor,
                })}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
