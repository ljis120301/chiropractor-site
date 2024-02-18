const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Server is listening on port : " + PORT + " ...");
});
