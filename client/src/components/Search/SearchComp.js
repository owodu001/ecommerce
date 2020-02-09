import React, { useState } from "react";
import {
  Row,
  Col,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
  Container
} from "react-bootstrap";
import "./SearchComp.css";

const SearchComp = ({ searchProducts }) => {
  const [value, setValue] = useState("");

  return (
    <Container className="SearchComp">
      <Row className="justify-content-center">
        <Col className="column" sm={3}>
          <Dropdown>
            <Dropdown.Toggle
              className="dropd"
              variant="info"
              id="dropdown-basic"
            >
              Sort by:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price: High to Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="column" sm={3}>
          <Dropdown>
            <Dropdown.Toggle
              className="dropd"
              variant="info"
              id="dropdown-basic"
            >
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
        </Col>
        <Col className="column" sm={6}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button
                className="dropd"
                variant="outline-secondary"
                onClick={() => {
                  console.log(value);
                  searchProducts(value);
                }}
              >
                Search Products
              </Button>
            </InputGroup.Prepend>
            <FormControl
              aria-describedby="basic-addon1"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchComp;
