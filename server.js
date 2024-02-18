const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("HELLO WORLDDD");
});

app.listen(PORT, () => {
  console.log("Server is listening on port : " + PORT + " ...");
});
