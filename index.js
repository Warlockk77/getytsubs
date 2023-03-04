const express = require("express");
const app = require("./routes.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("DATABASE CONNECTED !");
    app.listen(3000, () => console.log("SERVER RUNNING AT PORT 3000 !"));
  })
  .catch((err) => {
    console.log(err);
  });
