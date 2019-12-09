const passport = require("passport");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const db = require("../../models");
const router = express.Router();

// Flash
router.use(
  session({
    cookie: { maxAge: 3600000 },
    secret: "wootwoot"
  })
);
router.use(flash());

require("../../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

router.get("/memberships", function(req, res) {
  if (req.user) {
    db.Amenities.findAll().then(function(result) {
      res.render("memberships", {
        title: "Memberships",
        results: result,
        user: req.user
      });
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
