import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

import ProductGrid from "../components/ProductGrid/ProductGrid";
import CategoryBanner from "../components/HeroBanner/CategoryBanner"
import CategoryBar from "../components/categoryBar/CategoryBar";
import FootNav from "../components/Footer/Footer";
import Pages from "../components/Pagination/Pagination";
// import { Link } from 'react-router-dom';

//make collection page populate with selected collection items




export default function () {
    return (
        <>
        <CategoryBanner className="hero" spacing="base"/>
        <CategoryBar/>
        <hr/>
        {/* <SearchComp/> */}
        <hr/>
        <ProductGrid className="grid" spacing="base"/>
        {/* <hr/>
        <Pages/>
        <hr/> */}
        <FootNav/>
        
        </>
    );
}

