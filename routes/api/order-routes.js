const express = require("express");
const router = express.Router();

// Import Order model
const Order = require("../../models/Order");

// @route POST api/orders/add
// @desc Add new order
// @access Private
router.post("/add", (req, res) => {
    console.log(req.body)
    const customer = req.body.customer;
    const productIDs = req.body.product;
    const order = new Order({
        customer: customer,
        products: productIDs
    });
    order.save().then(orderDoc => { res.json(orderDoc) }).catch(err => console.log(err));
});

// Get all orders
router.get("/", (req, res) => {
    Order.find({})
        .then(orders => {
            res.json({ orders });
        })
        .catch(err => console.log(err));
});

// Get a specific order
router.get("/:id", (req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            res.json({ order });
        })
        .catch(err => console.log(err));
})

module.exports = router;