const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../../models");
const flash = require("connect-flash");
const session = require("express-session");

// Flash
router.use(
  session({
    cookie: { maxAge: 3600000 },
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
router.get("/admin/sessions", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    let classes;
    db.Class.findAll({}).then(function(result) {
      classes = result;
    });
    let instr;
    db.Instructor.findAll({}).then(function(result) {
      instr = result;
    });
    db.Session.findAll({
      include: [db.Instructor, db.Class]
    }).then(function(result) {
      res.render("admin/sessions", {
        layout: "admin",
        title: "Sessions",
        results: result,
        classes: classes,
        instructor: instr,
        user: req.user
      });
    });
  } else {
    res.redirect("/");
  }
});

//Get one
router.get("/admin/sessions/:id", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    let classes;
    let inst;
    db.Class.findAll({}).then(function(result) {
      classes = result;
    });
    db.Instructor.findAll({}).then(function(result) {
      inst = result;
    });
    db.Session.findOne({
      include: [db.Class, db.Instructor],
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.render("admin/session", {
        layout: "admin",
        title: result.Class.name,
        results: result,
        classes: classes,
        instructor: inst,
        user: req.user
      });
    });
  } else {
    res.redirect("/");
  }
});

//Post one
router.post("/admin/sessions", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    db.Session.create(req.body).then(function(result) {
      res.json(result);
      res.redirect("/admin/sessions");
    });
  } else {
    res.redirect("/");
  }
});

//Update one
router.put("/admin/sessions/:id", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    db.Session.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.render("admin/session", {
        layout: "admin",
        results: result,
        user: req.user
      });
    });
  } else {
    res.redirect("/");
  }
});

//Delete one
router.delete("/admin/sessions/:id", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
  } else {
    res.redirect("/");
  }
});

module.exports = router;
