import { Input, Col } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter, option }) => {
  return (
    <>
      {option == null ? (
        <Input
          className="react-table-search"
          placeholder="Search"
          value={filter || ""}
          onChange={e => setFilter(e.target.value)}
        />
      ) : (
        <Col lg="3" className="pl-0 mb-3">
          <div className="input-group">
            <Input
              value={filter || ""}
              onChange={e => setFilter(e.target.value)}
              placeholder={option == true ? "Search Vendors" : "Search Customers"}
            />
            <span className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </Col>
      )}
    </>
  );
};
