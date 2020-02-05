import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HeroBanner from "../HeroBanner/HeroBanner"


export default function () {

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then(res => console.log(res.data));
    }, []);

    return (
        <div>

            <HeroBanner />
        </div>
    );
}