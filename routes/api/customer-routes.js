const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// const passport = require("passport");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load Customer model
const Customer = require("../../models/Customer");

// @route POST api/products/add
// @desc Register new customer
// @access Private

router.post("/signup", (req, res) => {
    // To do:
    // - verify if email already exist
    // - hash password
    // - validate email format
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;

    const customer = new Customer({
        firstName,
        lastName,
        email,
        password,
        address
    });
    customer.save()
        .then(customer => {
            res.json({ customer });
        })
        .catch(err => {
            res.json.send("Error: cannot create new customer");
            console.log(err);
        });
});

// Get all customers
router.get("/", (req, res) => {
    Customer.find({})
        .then(customers => { res.json({ customers }) })
        .catch(err => {
            console.log("ERROR: ", err)
        });
});

// Get a specific customer
router.get("/:id", (req, res) => {
    Customer.findById(req.params.id)
        .then(customer => {
            res.json({ customer });
        })
        .catch(err => console.log("ERROR: ", err));
})



module.exports = router;
