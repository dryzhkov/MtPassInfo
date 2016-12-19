import * as express from "express";

const app = express();
const port = 7777;

app.get("*", (req, res) => {
  res.send("Woot. its working");
});

app.listen(port, (err) => {
  console.log(`Running server on port ${port}`);
});
