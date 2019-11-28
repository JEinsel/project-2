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

//Amenities routes
router.get("/admin/amenities", function(req, res) {
  if (req.user) {
    db.Amenities.findAll({}).then(function(dbAmenities) {
      res.render("admin/amenities", {
        layout: "admin",
        title: "Amenities",
        results: dbAmenities
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.get("/admin/amenities/:id", function(req, res) {
  if (req.user) {
    db.Amenities.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAmenities) {
      res.render("admin/amenity", {
        layout: "admin",
        results: dbAmenities
      });
    });
  } else {
    res.redirect("/login");
  }
});
router.post("/admin/amenities", function(req, res) {
  if (req.user) {
    db.Amenities.create(req.body).then(function(postAmenities) {
      res.json(postAmenities);
      res.redirect("/admin");
    });
  } else {
    res.redirect("/login");
  }
});
router.put("/admin/amenities/:id", function(req, res) {
  if (req.user) {
    db.Amenities.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbAmenities) {
      res.render("admin/amenity", {
        layout: "admin",
        results: dbAmenities
      });
    });
  } else {
    res.redirect("/login");
  }
});

router.delete("/admin/amenities/:id", function(req, res) {
  if (req.user) {
    db.Amenities.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAmenities) {
      res.render("admin/amenities", {
        layout: "admin",
        title: "Amenities",
        results: dbAmenities
      });
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
