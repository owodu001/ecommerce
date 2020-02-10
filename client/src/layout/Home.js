import React, { useEffect, useContext } from "react";
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


}
