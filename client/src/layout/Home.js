import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import axios from "axios";

import HeroBanner from "../components/HeroBanner/HeroBanner";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SearchComp from "../components/Search/SearchComp";

import CategoryBar from "../components/categoryBar/CategoryBar";
import FootNav from "../components/Footer/Footer";
import Pages from "../components/Pagination/Pagination";




export default function () {

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then(res => console.log(res.data));
    }, []);

    return (
        <>
            <HeroBanner className="hero" spacing="base" />
            <CategoryBar />
            <hr />
            <ProductGrid className="grid" spacing="base" />
            <hr />
            <Pages />
            <hr />
            {/* <FootNav/> */}
        </>

    );

// export default function() {
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/products")
//       .then(res => console.log(res.data));
//   }, []);

 
}
