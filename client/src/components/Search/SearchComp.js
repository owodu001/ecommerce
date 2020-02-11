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


const SearchComp = ({ filterProducts , sortPriceLow}) => {
  const [value, setValue] = useState("test");
  const [productsByPrice, setProductsByPrice] = useState([]);

  return (
    <Container className="SearchComp">
      <Row className="justify-content-center">
        <Col className="column" lg={6} sm={12}>
          <Button className="searchBtn"
                onClick={() => {
                  console.log();
                  sortPriceLow();
                }}>
            Sort Price Low to High
          </Button>
           <Dropdown>
            <Dropdown.Toggle
              className="searchBtn"
              variant="info"
              id="dropdown-basic"
            >
              Sort by:
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {/* value={productsByPrice} onChange={setProductsByPrice()} */}
               <Dropdown.Item>
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price: High to Low
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        
        <Col className="column" lg={6} sm={12}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button
                className="searchBtn"
                onClick={() => {
                  console.log(value);
                  filterProducts(value);
                }}
              >
                Search Products
              </Button>
            </InputGroup.Prepend>
            <FormControl
            className="searchInput"
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