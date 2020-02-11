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
  const [value, setValue] = useState("");
  const [productsByPrice, setProductsByPrice] = useState([]);

  return (
    <Container className="SearchComp">
      <Row className="justify-content-center">
        <Col className="column" lg={6} sm={12}>
          <Button className="searchBtn"
                onClick={() => {
                  sortPriceLow();
                }}>
            Sort Price Low to High
          </Button>
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
              placeholder="Search products"
              onChange={e => setValue(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchComp;