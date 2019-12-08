const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");
const flash = require("connect-flash");
const session = require("express-session");

// Flash
router.use(
  session({
    cookie: { maxAge: 30000000 },
    secret: "wootwoot"
  })
);
router.use(flash());

// Passport
require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

//Amenities routes

//Get all
router.get("/", function(req, res) {
  let amenities;
  let inst;
  let classes;
  db.Amenities.findAll({}).then(function(result) {
    amenities = result;
  });
  db.Class.findAll({}).then(function(result) {
    classes = result;
  });
  db.Instructor.findAll({})
    .then(function(result) {
      inst = result;
    })
    .then(function(result) {
      console.log(result);
      res.render("index", {
        layout: "main",
        title1: "Welcome to N.E. Gym",
        title2: "Ammenities",
        title3: "Instructors",
        title4: "Classes",
        inst: inst,
        am: amenities,
        classes: classes,
        user: req.user
      });
    });
});

//Get one
router.get("/about", function(req, res) {
  res.render("about", {
    title: "About N.E. Gym",
    text:
      "Spicy jalapeno bacon ipsum dolor amet beef salami turducken shankle chicken sirloin corned beef leberkas biltong pork loin fatback. Short ribs burgdoggen beef ribs tongue beef chicken landjaeger salami pastrami sausage biltong filet mignon tri-tip porchetta. Tongue porchetta prosciutto, short ribs jowl picanha boudin tail. Pastrami doner frankfurter drumstick meatball picanha ham bacon."
  });
});

//Post one
router.post("/admin/amenities", function(req, res) {});

//Update one
router.put("/admin/amenities/:id", function(req, res) {});

//Delete one
router.delete("/admin/amenities/:id", function(req, res) {});

module.exports = router;
