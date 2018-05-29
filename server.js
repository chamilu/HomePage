const Path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 2000;

app.use(express.static(Path.resolve(__dirname, "./public")));

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
