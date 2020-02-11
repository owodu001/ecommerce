const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const User = require("../../models/user");

// User Schema
// const User = {
//   id: 0, // +1
//   name: "",
//   email: "",
//   password: "",
// };

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // To check user in DB instead
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password // still needs to be hashed
        };

        // Hash password before saving in database
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            // Save to DB...
            const dbUser = new User(newUser);
            dbUser
              .save()
              .then(user => {
                console.log("User is registered up successfully!");
                res.json(user);
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email })
    .then(user => {
      // Check if user doesn't exist
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user._id,
            name: user.name
          };

          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 60 * 60 * 24 // 1 min in seconds NOTE: You want a higher number.
            },
            (err, token) => {
              console.log("USER: > ", user);
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
          console.log("User logged in successfully!");
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
