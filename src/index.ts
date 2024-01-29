import express, { Application } from "express";
import bodyParser from "body-parser";

import { PORT } from "./config/serverConfig";
import { ApiRouter } from "./routers/index";

const startServer = async () => {
  const app: Application = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api", ApiRouter);

  app.listen(PORT, () => {
    console.log("Server started on port", PORT);
  });
};

startServer();
