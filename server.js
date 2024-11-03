const express = require("express");
const path = require("path");
const api = require("./controller");
const app = express();
const port = 3000;
const { sql } = require("./config/connection");
const { initializeSQL } = require("./config/initialize");
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", api);

// Serve index.html on the "/" route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
initializeSQL(sql).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
