const express = require("express");
const path = require("path");
const api = require("./controller");
const app = express();
const port = 3000;
const { sql } = require("./config/connection");
const { initializeSQL } = require("./config/initialize");
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api", api);

// Serve index.html on the "/" route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "menu.html"));
});

app.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "order.html"));
});

app.get("/orders", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "orders.html"));
});

app.get("/bank", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bank.html"));
});

// Start the server
initializeSQL(sql).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
