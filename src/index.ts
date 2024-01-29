import express, { Application } from "express";

import { PORT } from "./config/serverConfig";

const startServer = async () => {
  const app: Application = express();

  app.listen(PORT, () => {
    console.log("Server started on port", PORT);
  });
};

startServer();
