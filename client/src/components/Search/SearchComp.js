import React from "react";
import {Row, Col, Dropdown, Button, InputGroup, FormControl, Container} from "react-bootstrap";
import "./SearchComp.css";

const SearchComp = () => (
<Container className="SearchComp">
<Row className="justify-content-center">
<Col className="column" sm={3}>
<Dropdown>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
            Sort by:
    </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Price: Low to High</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price: High to Low</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
</Col>
<Col className="column" sm={3}>
<Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
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
<Col className="column"sm={6}>
<InputGroup className="mb-3">
        <InputGroup.Prepend>
        <Button variant="outline-secondary">Search Products</Button>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" />
    </InputGroup>
</Col>
</Row>
</Container>




);

export default SearchComp;