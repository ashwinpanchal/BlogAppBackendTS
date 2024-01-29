import { Router } from "express";

import { BlogController } from "../../controllers/index";

export const v1Router = Router();

v1Router.post("/blogs", BlogController.create);
