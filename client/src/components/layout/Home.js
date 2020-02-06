import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import axios from "axios";

import HeroBanner from "../HeroBanner/HeroBanner";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchComp from "../Search/SearchComp";

import CategoryBar from "../categoryBar/CategoryBar";
import FootNav from "../Footer/Footer";
import Pages from "../Pagination/Pagination";




export default function () {

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/api/products")
    //         .then(res => console.log(res.data));
    // }, []);

    return (
        <>
            <HeroBanner className="hero" spacing="base" />
            <CategoryBar />
            <hr />
            <SearchComp />
            <hr />
            <ProductGrid className="grid" spacing="base" />
            <hr />
            <Pages />
            <hr />
        </>
    );

export default function() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(res => console.log(res.data));
  }, []);

 
}
