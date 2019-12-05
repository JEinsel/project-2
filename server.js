require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const hbs = exphbs.create({
  defaultLayout: "main",
  //custom helper
  helpers: {
    ifEq: function(a, b, opts) {
      if (a === b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    },
    ifMore: function(a, b, opts) {
      if (a >= b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    },
    ifLess: function(a, b, opts) {
      if (a <= b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    }
  }
});

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Admin routes
const adminRoutes = require("./controller/admin/admin-controller");
const amenitiesRoutes = require("./controller/admin/amenities-controller");
const instructorsRoutes = require("./controller/admin/instructors-controller");
const classesRoutes = require("./controller/admin/classes-controller");
const catRoutes = require("./controller/admin/categories-controller");
const usersRoutes = require("./controller/admin/users-controller");
const payments = require("./controller/admin/payments-controller");
const paypal = require("./controller/admin/paypal-controller");

app.use(paypal);
app.use(payments);
app.use(adminRoutes);
app.use(amenitiesRoutes);
app.use(instructorsRoutes);
app.use(classesRoutes);
app.use(catRoutes);
app.use(usersRoutes);

//Auth routes
const userRoutes = require("./controller/user-controller");
const authRoutes = require("./controller/auth-controller");

app.use(userRoutes);
app.use(authRoutes);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});
