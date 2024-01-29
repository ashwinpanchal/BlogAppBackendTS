import { Router } from "express";

import { v1Router } from "./v1/index";

export const ApiRouter = Router();

ApiRouter.use("/v1", v1Router);
