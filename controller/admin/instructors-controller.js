const db = require("../../models");
const express = require("express");
const router = express.Router();

//Instructors routes
router.get("/admin/instructors", function(req, res) {
  db.Instructor.findAll({}).then(function(dbInstructor) {
    res.render("admin/instructors", {
      layout: "admin",
      title: "Instructors",
      results: dbInstructor
    });
  });
});
router.get("/admin/instructors/:id", function(req, res) {
  res.send("instructors ID route");
});
router.post("/admin/instructors", function(req, res) {
  db.Instructor.create(req.body).then(function(postInstructors) {
    res.json(postInstructors);
    location.reload();
  });
});
router.put("/admin/instructors/:id", function(req, res) {
  res.send("instructors update by ID route");
});
router.delete("/admin/instructors/:id", function(req, res) {
  res.send("instructors update by ID route");
});

module.exports = router;
