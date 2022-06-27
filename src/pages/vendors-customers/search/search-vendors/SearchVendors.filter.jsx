import { useState } from "react";

import { Col, Row } from "reactstrap";

import { FilterPanel } from "components/panels";
import { InputField } from "components/widgets";

export const SearchVendorsFilterPanel = ({ onSearchVendors }) => {
  const [searchCompanyName, setSearchCompanyName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchWebpage, setSearchWebpage] = useState("");

  const onChangeSearchCompanyName = e => {
    const searchCompanyName = e.target.value;
    setSearchCompanyName(searchCompanyName);
  };

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchEmail = e => {
    const searchEmail = e.target.value;
    setSearchEmail(searchEmail);
  };

  const onChangeSearchWebpage = e => {
    const searchWebpage = e.target.value;
    setSearchWebpage(searchWebpage);
  };

  const resetFilters = () => {
    setSearchCompanyName("");
    setSearchName("");
    setSearchEmail("");
    setSearchWebpage("");
  };

  const findByAllParameters = () => {
    const filters = parametersToFilter();
    onSearchVendors(filters);
  };

  const parametersToFilter = () => {
    return Object.assign(
      {},
      searchCompanyName && searchCompanyName !== "" ? { сompanyName: searchCompanyName } : null,
      searchName && searchName !== "" ? { name: searchName } : null,
      searchEmail && searchEmail !== "" ? { email: searchEmail } : null,
      searchWebpage && searchWebpage !== "" ? { webpage: searchWebpage } : null
    );
  };

  return (
    <FilterPanel
      title="Search Vendors"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="3">
          <InputField
            id="input-company-name"
            label="Company Name"
            style={{ height: "36px" }}
            className="form-control"
            value={searchCompanyName}
            placeholder="Company Name"
            type="text"
            onChange={onChangeSearchCompanyName}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-name"
            label="Name"
            style={{ height: "36px" }}
            className="form-control"
            value={searchName}
            placeholder="Name"
            type="text"
            onChange={onChangeSearchName}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-email"
            label="Email"
            style={{ height: "36px" }}
            className="form-control"
            value={searchEmail}
            placeholder="Email"
            type="text"
            onChange={onChangeSearchEmail}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-webpage"
            label="Webpage"
            style={{ height: "36px" }}
            className="form-control"
            value={searchWebpage}
            placeholder="Webpage"
            type="text"
            onChange={onChangeSearchWebpage}
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>
    </FilterPanel>
  );
};
