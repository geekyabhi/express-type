const express = require("express");
require("colors");
const app = express();

console.log("HEllo");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server runing on port 3000".yellow);
});
