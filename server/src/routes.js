import { Router } from "express";
const routes = new Router();

import CuponController from "./app/controllers/CuponController";

routes.get("/", CuponController.index);
routes.post("/Cupons", CuponController.store);
routes.put("/Cupons/:id", CuponController.update);

export default routes;
