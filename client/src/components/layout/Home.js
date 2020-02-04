import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductGrid from "../ProductGrid/ProductGrid";
import NavMain from "../NavMain/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {
    return (
        <>
        <NavMain/>
        <HeroBanner/>
        <ProductGrid/>
        </>
    );
}

