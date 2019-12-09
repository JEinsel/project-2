const passport = require("passport");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const db = require("../../models");
const router = express.Router();

// Flash
router.use(
  session({
    cookie: { maxAge: 300000 },
    secret: "wootwoot"
  })
);
router.use(flash());

require("../../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

router.get("/classes", function(req, res) {
  db.Class.findAll().then(function(result) {
    res.render("classes", {
      title: "Classes",
      results: result,
      user: req.user
    });
  });
});

module.exports = router;