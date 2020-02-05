import React from "react";
import { Pagination } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./CategoryBar.css";

function Pages() {
  return (

<Pagination className="justify-content-center">
  {/* <Pagination.First /> */}
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>
  {/* <Pagination.Item active>{5}</Pagination.Item> */}
  {/* <Pagination.Item disabled>{6}</Pagination.Item> */}

  {/* <Pagination.Ellipsis /> */}
  
  <Pagination.Next />
  {/* <Pagination.Last /> */}
</Pagination>
  )
}

export default Pages; 