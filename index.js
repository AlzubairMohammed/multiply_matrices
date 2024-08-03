const express = require("express");
const { multiplyMatrices } = require("./multiplyMatrices");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/multiply", (req, res) => {
  //   return res.json(req.body);
  //   req.body = JSON.parse(req.body);
  let matrix1 = JSON.parse(req.body.matrix1);
  let matrix2 = JSON.parse(req.body.matrix2);
  let result = multiplyMatrices(matrix1, matrix2);
  res.render("index", { result });
});
app.listen(7070, () => console.log(`App listen in 7070`));
