const express = require("express");

const app = express();
const errorHandler = require("./middleware/error");

app.use(express.json());
//Routes imports

const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);

//middlerware for errors
app.use(errorHandler);

module.exports = app;
