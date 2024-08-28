import { Router } from "express";
import recetasController from "../controllers/recetasController.js";

const recetasRouter = Router();

recetasRouter.get("/", recetasController.getAllRecipes);

recetasRouter.get("/:id", recetasController.getOneRecipe);

recetasRouter.post("/", recetasController.createNewRecipe);

recetasRouter.put("/:id", recetasController.updateRecipe);

recetasRouter.delete("/:id", recetasController.deleteRecipe);

export default recetasRouter;
