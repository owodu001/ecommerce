const express = require("express");
const router = express.Router();

// Load Product
const Product = require("../../models/Product");

// @route POST api/products/add
// @desc Add new product
// @access Private

router.post("/add", (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const category = req.body.category;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3;

    const product = new Product({
        title,
        description,
        price,
        quantity,
        category,
        image1,
        image2,
        image3
    });
    product.save()
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/", (req, res) => {
    Product.find({})
        .then(products => {
            res.json(products);
            console.log(" Processing GET: /api/products/");
        })
        .catch(err => { console.log("ERROR: ", err) });
});

// Get a specific product
router.get("/:id", (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.json(product);
            console.log(" Processing GET: /api/:id");
        })
        .catch(err => { console.log("ERROR: ", err) });
});

// router.post("/register", (req, res) => {
//     // Form validation

//     const { errors, isValid } = validateRegisterInput(req.body);

//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             return res.status(400).json({ email: "Email already exists" });
//         } else {
//             const newUser = new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             });

//             // Hash password before saving in database
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     newUser.password = hash;
//                     newUser
//                         .save()
//                         .then(user => res.json(user))
//                         .catch(err => console.log(err));
//                 });
//             });
//         }
//     });
// });

// // @route POST api/users/login
// // @desc Login user and return JWT token
// // @access Public
// router.post("/login", (req, res) => {
//     // Form validation

//     const { errors, isValid } = validateLoginInput(req.body);

//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const email = req.body.email;
//     const password = req.body.password;

//     // Find user by email
//     User.findOne({ email }).then(user => {
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ emailnotfound: "Email not found" });
//         }

//         // Check password
//         bcrypt.compare(password, user.password).then(isMatch => {
//             if (isMatch) {
//                 // User matched
//                 // Create JWT Payload
//                 const payload = {
//                     id: user.id,
//                     name: user.name
//                 };

//                 // Sign token
//                 jwt.sign(
//                     payload,
//                     keys.secretOrKey,
//                     {
//                         expiresIn: 31556926 // 1 year in seconds
//                     },
//                     (err, token) => {
//                         res.json({
//                             success: true,
//                             token: "Bearer " + token
//                         });
//                     }
//                 );
//             } else {
//                 return res
//                     .status(400)
//                     .json({ passwordincorrect: "Password incorrect" });
//             }
//         });
//     });
// });

module.exports = router;
