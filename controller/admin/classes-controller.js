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

//Classes routes
router.get("/admin/classes", function(req, res) {
  if (req.user) {
    let cats;
    db.Category.findAll({}).then(function(result) {
      cats = result;
    });

    db.Class.findAll({ include: [db.Category] }).then(function(dbClasses) {
      res.render("admin/classes", {
        layout: "admin",
        title: "Classes",
        results: dbClasses,
        categories: cats
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.get("/admin/classes/:id", function(req, res) {
  if (req.user) {
    let cats;
    db.Category.findAll({}).then(function(result) {
      cats = result;
    });
    db.Class.findOne({
      include: [db.Category],
      where: {
        id: req.params.id
      }
    }).then(function(dbClasses) {
      //res.json(dbClasses);
      res.render("admin/class", {
        layout: "admin",
        results: dbClasses,
        categories: cats
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.post("/admin/classes", function(req, res) {
  if (req.user) {
    db.Class.create(req.body).then(function(postClasses) {
      res.json(postClasses);
      res.redirect("/admin/classes");
    });
  } else {
    res.redirect("/login");
  }
});
router.put("/admin/classes/:id", function(req, res) {
  if (req.user) {
    db.Class.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbClasses) {
      res.render("admin/class", {
        layout: "admin",
        results: dbClasses
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.delete("/admin/classes/:id", function(req, res) {
  if (req.user) {
    db.Class.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbClasses) {
      res.json(dbClasses);
      res.redirect("/admin/classes");
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
