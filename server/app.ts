import * as express from "express";
const path = require("path");
const app = express();
const port = 7777;

app.use(express.static("public"));
app.use("/react", express.static("node_modules/react/dist"));
app.use("/react-dom", express.static("node_modules/react-dom/dist"));

app.get("/", (req, res) => {
  // console.log("sending file..." + path.join(__dirname, "../index.html"));
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(port, (err) => {
  console.log(`Running server on port ${port}`);
});
