const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./src/routes");
const connectToDatabase = require("./src/database");

connectToDatabase();

const app = express();
const port = /* process.env.PORT  */ 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`👌 Backend started at http://localhost:${port}`);
});
