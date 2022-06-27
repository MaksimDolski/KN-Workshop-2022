import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { deleteVendor, searchVendors, selectAllVendorData } from "redux/features";

import { ReactTable } from "components/widgets";

import { VENDOR_DETAILS } from "pages/vendors-customers";

import { SearchVendorsFilterPanel } from "./SearchVendors.filter";
import { vendorsTableColumns } from "./SearchVendors.table";

export const SearchVendorsPage = ({ option }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vendors = useSelector(selectAllVendorData);

  const onSearchVendors = async filters => {
    dispatch(searchVendors(filters));
  };

  const onViewVendorDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${VENDOR_DETAILS}/${id}`);
  };

  const onDeleteVendor = async e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    dispatch(deleteVendor(parseInt(id)));
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
