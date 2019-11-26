var db = require("../models");

module.exports = function(app) {
  // Dashboard
  app.get("/admin", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("admin/index", {
        layout: "admin",
        title: "Dashboard homepage",
        results: dbExamples
      });
    });
  });

  //Members routes
  app.get("/admin/members", function(req, res) {
    res.send("members route");
  });
  app.get("/admin/members/:id", function(req, res) {
    res.send("members ID route");
  });
  app.post("/members", function(req, res) {
    res.send("members post route");
  });
  app.put("/admin/members/:id", function(req, res) {
    res.send("members update by ID route");
  });
  app.delete("/admin/members/:id", function(req, res) {
    res.send("members update by ID route");
  });

  //Instructors routes
  app.get("/admin/instructors", function(req, res) {
    res.send("instructors route");
  });
  app.get("/admin/instructors/:id", function(req, res) {
    res.send("instructors ID route");
  });
  app.post("/admin/instructors", function(req, res) {
    res.send("instructors post route");
  });
  app.put("/admin/instructors/:id", function(req, res) {
    res.send("instructors update by ID route");
  });
  app.delete("/admin/instructors/:id", function(req, res) {
    res.send("instructors update by ID route");
  });

  //Classes routes
  app.get("/admin/classes", function(req, res) {
    res.send("classes route");
  });
  app.get("/admin/classes/:id", function(req, res) {
    res.send("classes ID route");
  });
  app.post("/admin/classes", function(req, res) {
    res.send("classes post route");
  });
  app.put("/admin/classes/:id", function(req, res) {
    res.send("classes update by ID route");
  });
  app.delete("/admin/classes/:id", function(req, res) {
    res.send("classes update by ID route");
  });

  //Amenities routes
  app.get("/admin/amenities", function(req, res) {
    db.Amenities.findAll({}).then(function(dbAmenities) {
      res.render("admin/amenities", {
        layout: "admin",
        title: "Amenities",
        results: dbAmenities
      });
    });
  });
  app.get("/admin/amenities/:id", function(req, res) {
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
  });
  app.post("/admin/amenities", function(req, res) {
    db.Amenities.create(req.body).then(function(postAmenities) {
      res.json(postAmenities);
      res.redirect("/admin");
    });
  });
  app.put("/admin/amenities/:id", function(req, res) {
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
  });

  app.delete("/admin/amenities/:id", function(req, res) {
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
  });

  //Payments routes
  app.get("/admin/payments", function(req, res) {
    res.send("amenities route");
  });
  app.get("/admin/payments/:id", function(req, res) {
    res.send("amenities ID route");
  });
};
