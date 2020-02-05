import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

import ProductGrid from "../ProductGrid/ProductGrid";
import SearchComp from "../Search/SearchComp";
import CategoryBanner from "../HeroBanner/CategoryBanner"
import CategoryBar from "../categoryBar/CategoryBar";
import FootNav from "../Footer/Footer";
import Pages from "../Pagination/Pagination";
// import { Link } from 'react-router-dom';

//make collection page populate with selected collection items

export default function () {
    return (
        <>
        <CategoryBanner className="hero" spacing="base"/>
        <CategoryBar/>
        <hr/>
        <SearchComp/>
        <hr/>
        <ProductGrid className="grid" spacing="base"/>
        <hr/>
        <Pages/>
        <hr/>
        <FootNav/>
        
        </>
    );
}

