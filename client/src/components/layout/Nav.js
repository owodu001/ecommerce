import React from "react";
import { Link } from "react-router-dom";

export default function () {

    const styles = {
        nav: {
            backgroundColor: "black",
            color: "white",

        },
        navLink: {
            listStyle: "none",
            padding: "30px"
        },
        li: {
            display: "inline",
            textDecoration: "none",
            paddingRight: "15px"
        },
        link: {
            color: "white"
        }
    }

    return (
        <nav style={styles.nav}>
            <ul style={styles.navLink}>
                <Link to="/" style={styles.link}> <li style={styles.li}> Home</li></Link>
                <Link to="/product" style={styles.link}> <li style={styles.li}> Product Detail</li></Link>
                <Link to="/sign-in" style={styles.link}> <li style={styles.li}> Sign In</li></Link>
                <Link to="/cart" style={styles.link}> <li style={styles.li}> Cart</li></Link>
            </ul>
        </nav>


    );
}