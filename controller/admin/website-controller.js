const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../../models");
const flash = require("connect-flash");
const session = require("express-session");

// Flash
router.use(
  session({
    cookie: { maxAge: 3000000 },
    secret: "wootwoot"
  })
);
router.use(flash());

// Passport
require("../../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

//Amenities routes

//Get all
router.get("/index", function(req, res) {
  res.render("index", {
    layout: "main",
    title: "WELCOME TO N.E. GYM"
  });
});

//Get one
router.get("/admin/amenities/:id", function(req, res) {
  
});

//Post one
router.post("/admin/amenities", function(req, res) {
  
});

//Update one
router.put("/admin/amenities/:id", function(req, res) {
  
});

//Delete one
router.delete("/admin/amenities/:id", function(req, res) {
  
});

module.exports = router;
