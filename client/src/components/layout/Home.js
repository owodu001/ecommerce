import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroBanner from "../HeroBanner/HeroBanner";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchComp from "../Search/searchFilterSort";

import CatergoryBar from "../categoryBar/CatergoryBar";

export default function () {
    return (
        <>
        <HeroBanner/>
        <CatergoryBar/>
        <SearchComp/>
        <ProductGrid/>
        </>
    );
}

