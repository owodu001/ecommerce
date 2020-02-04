import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductGrid from "../ProductGrid/ProductGrid";
import NavMain from "../NavMain/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CatergoryBar from "../categoryBar/CatergoryBar";

export default function () {
    return (
        <>
        <HeroBanner/>
        <CatergoryBar/>
        {/* search/filter/sort */}
        <ProductGrid/>
        </>
    );
}

