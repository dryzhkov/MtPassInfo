import * as express from "express";
import {WSDOTService} from './services/wsdot';
const path = require("path");
const app = express();
const port = 7777;

app.use(express.static("public"));
app.use("/react", express.static("node_modules/react/dist"));
app.use("/react-dom", express.static("node_modules/react-dom/dist"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// set up routes for api
const apiRouter = express.Router();

apiRouter.get("/passes", (req, res) => {
  WSDOTService.getMountainPassConditions().then(results => {
    res.json(results);
  }).catch(error => {
    res.json({message: "Unexpected error:" + error});
  });
});

app.use("/api", apiRouter);

app.listen(port, (err) => {
  console.log(`Running server on port ${port}`);
});
