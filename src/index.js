const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");

const router = require("./routes");
const db = require("./config/db");

// Connect DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "handlebars",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

// router
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
