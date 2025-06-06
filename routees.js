const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("Request Received");
  res.send("You Contacted Root Path");
});

app.get("/apple", (req, res) => {
  console.log("Request Received");
  res.send("You Contacted Apple Path");
});

app.get("/banana", (req, res) => {
  console.log("Request Received");
  res.send("You Contacted Banana Path");
});

app.get("/mango", (req, res) => {
  console.log("Request Received");
  res.send("You Contacted Mango Path");
});
