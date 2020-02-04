import React from "react";
import {Row, Col, Dropdown, Button, InputGroup, FormControl} from "react-bootstrap";
import "./searchFilterSort.css";

const SearchComp = () => (
<Row className="searchFilterSort">
    <Col xs={6} md={4}>
      <div className="sort-filter">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort by:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Price: Low to High</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Price: High to Low</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter by:
            </Dropdown.Toggle>

            {/* UPDATE THIS DROPDOWN MENU TO FILTER BY YOUR SPECIFIC CATEGORIES */}
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 3</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 4</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
      </div>
    </Col>
    <Col xs={12} md={8} className="searchbar">
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <Button variant="outline-secondary">Search Products</Button>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" />
    </InputGroup>
    </Col>
  </Row>

);

export default SearchComp;