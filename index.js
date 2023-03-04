const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");

const port = 3000;

// Parse JSON bodies (as sent by API clients)
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const string = `mongodb+srv://warlockk:gabru123@cluster0.1yrferc.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log(`App listening on port ${port}!`));
