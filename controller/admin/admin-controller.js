const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../../models");
const flash = require("connect-flash");
const session = require("express-session");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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

// Dashboard
router.get("/admin", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    db.Example.findAll({}).then(function(result) {
      res.render("admin/index", {
        layout: "admin",
        title: "Dashboard homepage",
        results: result
      });
    });
  } else {
    res.redirect("/");
  }
});

//All admin users
router.get("/admin/admins", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    db.user
      .findAll({
        where: {
          memberLvl: {
            [Op.gte]: 4
          }
        }
      })
      .then(function(result) {
        res.render("admin/admins", {
          layout: "admin",
          title: "Admin users",
          results: result
        });
      });
  } else {
    res.redirect("/");
  }
});

//One admin user
router.get("/admin/admins/:id", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    db.user
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(result) {
        res.render("admin/admin", {
          layout: "admin",
          title: "Admin",
          results: result
        });
      });
  } else {
    res.redirect("/login");
  }
});

//New admin user
router.post("/admin/admins", function(req, res) {
  if (req.user && req.user.memberLvl >= 4) {
    db.admin.create(req.body).then(function(result) {
      res.json(result);
      res.redirect("/admin/admins");
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
