const passport = require("passport");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const db = require("../../models");
const router = express.Router();

// Flash
router.use(
  session({
    cookie: { maxAge: 30000000 },
    secret: "wootwoot"
  })
);
router.use(flash());

require("../../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

router.get("/memberships", function (req, res) {
  if (req.user) {
    res.render("memberships", {
      title: "Memberships",
      user: req.user
    });
  } else {
    res.redirect("/");
  }
});

router.put("/memberships", function(req, res) {
  if (req.user) {
    db.user
      .update(req.body, {
        email: req.body.email,
        password: req.body.password,
        fName: req.body.fName,
        lName: req.body.lName
      })
      .then(function(result) {
        res.render("user/fe-memberships", {
          layout: "fe-memberships",
          results: result,
          user: req.user
        });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
