import express from "express";
import { cardEndpoints, companyEndpoints, userEndpoints } from "./v1/index";
import ErrorMiddleWare from "./v1/middleware/errors";

const app = express();

app.use(function (req, res, next) {
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  next();
});

app.use("/v1/users", userEndpoints);
app.use("/v1/companies", companyEndpoints);
app.use("/v1/cards", cardEndpoints);

// TODO add auth middleware here and user_id to request
app.use(ErrorMiddleWare.handleErrors);

// Start server
const port = 9090;
app.listen(port, () => {
  console.log("🚀 Server is up on port", port);
});
