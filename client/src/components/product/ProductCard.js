import React from "react";
// import { storiesOf } from "@storybook/react";

import { Card } from "react-bootstrap";

const ProductCard = () => (
    <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  );
  
export default ProductCard;