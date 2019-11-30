const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../../models");
const flash = require("connect-flash");
const session = require("express-session");

// Flash
router.use(
  session({
    cookie: { maxAge: 60000 },
    secret: "wootwoot"
  })
);
router.use(flash());

// Passport
require("../../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

// Dashboard
router.get("/admin", function(req, res) {
  if (req.user) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("admin/index", {
        layout: "admin",
        title: "Dashboard homepage",
        results: dbExamples
      });
    });
  } else {
    res.redirect("/login");
  }
});

//Members routes
router.get("/admin/members", function(req, res) {
  if (req.user) {
    res.send("members route");
  } else {
    res.redirect("/login");
  }
});
router.get("/admin/members/:id", function(req, res) {
  if (req.user) {
    res.send("members ID route");
  } else {
    res.redirect("/login");
  }
});
router.post("/members", function(req, res) {
  if (req.user) {
    res.send("members post route");
  } else {
    res.redirect("/login");
  }
});
router.put("/admin/members/:id", function(req, res) {
  if (req.user) {
    res.send("members update by ID route");
  } else {
    res.redirect("/login");
  }
});
router.delete("/admin/members/:id", function(req, res) {
  if (req.user) {
    res.send("members update by ID route");
  } else {
    res.redirect("/login");
  }
});

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
