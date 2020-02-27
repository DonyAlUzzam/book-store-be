const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./src/routers/index");
require("./db");

const app = express();
const port =  process.env.PORT || 8081;

corsOptions = {
    origin: "Your FrontEnd Website URL",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
// Package
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server Running on Port : ${port}`));
