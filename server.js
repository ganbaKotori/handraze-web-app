const express = require("express");

const app = express();

const port = 3000; // go to http://localhost:3000

app.get("/", (req, res) => {
  //req = requirement ; res = response
  res.send("Handraze Backend Server");
});

app.listen(port, () => {
  console.log(`Handraze Express Server listening on port ${port}`);
});
