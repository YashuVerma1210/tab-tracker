/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
// For Express version less than 4.16.0
// ------------------------------------
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// Express v4.16.0 and higher
// --------------------------
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/status", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.listen(process.env.PORT || 8081);
