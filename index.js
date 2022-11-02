//Question 1. How do you create a simple Express.js application?

const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("connected");
});

// Question 2. Implementation of all type of exports in backend application
//Default
const Data = require("./Data");
console.log(Data);

//Named
const { DataTwo } = require("./DataTwo");

console.log(DataTwo);

// Ouestiom 3.Create a middleware which will be applicable to all the routes.

const middleware = (rez, res, next) => {
  console.log("working middleware");

  next();
};

app.use(middleware); //applicable for all routes

//Ouestion 4 . CORS

const cors = require("cors");

app.use(cors()); // for all routes

app.get("/home", (req, res) => {
  res.send("routes working fine");
});
