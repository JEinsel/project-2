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
router.get("/admin/categories", function(req, res) {
  if (req.user) {
    db.Category.findAll({}).then(function(dbCategories) {
      res.render("admin/categories", {
        layout: "admin",
        title: "Classes categories",
        results: dbCategories
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.get("/admin/categories/:id", function(req, res) {
  if (req.user) {
    db.Category.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategories) {
      res.render("admin/category", {
        layout: "admin",
        results: dbCategories
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.post("/admin/categories", function(req, res) {
  if (req.user) {
    db.Category.create(req.body).then(function(postCategory) {
      res.json(postCategory);
      res.redirect("/admin/categories");
    });
  } else {
    res.redirect("/login");
  }
});
router.put("/admin/categories/:id", function(req, res) {
  if (req.user) {
    db.Category.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbCategories) {
      res.render("admin/category", {
        layout: "admin",
        results: dbCategories
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.delete("/admin/categories/:id", function(req, res) {
  if (req.user) {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategories) {
      res.render("admin/categories", {
        layout: "admin",
        title: "Categories",
        results: dbCategories
      });
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
