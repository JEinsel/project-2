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

// paypal
router.get("/paypal", function(req, res) {
  if (req.user) {
    res.render("payments/payment", {
      layout: "main",
      userId: req.user.id,
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
});

// paypal
router.post("/prepayment", function(req, res) {
  if (req.user) {
    res.render("payments/payment", {
      layout: "main",
      userId: req.user.id,
      type: req.body.type,
      amount: req.body.amount,
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
});

//New admin user
router.post("/paypal", function(req, res) {
  if (req.user) {
    db.Payment.create({
      paymentId: req.body.orderID,
      payerID: req.body.payerID,
      payerEmail: req.body.payerEmail,
      amount: req.body.amount,
      status: req.body.status,
      referenceId: req.body.referenceId,
      userId: req.user.id
    }).then(function(result) {
      console.log(result);
      if (req.body.status === "COMPLETED") {
        res.redirect("/success");
      } else {
        res.redirect("/error");
      }
    });
  } else {
    res.redirect("/login");
  }
});
// success
router.get("/success", function(req, res) {
  if (req.user) {
    res.render("common", {
      layout: "main",
      userId: req.user.id,
      title: "Thank you for your purchase!",
      text: "Success!!!",
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
});
// success
router.get("/cancel", function(req, res) {
  if (req.user) {
    res.render("common", {
      layout: "main",
      userId: req.user.id,
      title: "Something went wrong :(",
      text: "Erro!!!",
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
});
module.exports = router;
