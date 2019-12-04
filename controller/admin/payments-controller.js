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

//Payments routes
router.get("/admin/payments", function(req, res) {
  if (req.user) {
    res.send("payments route");
  } else {
    res.redirect("/login");
  }
});
router.get("/admin/payments/:id", function(req, res) {
  if (req.user) {
    res.send("payments ID route");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
