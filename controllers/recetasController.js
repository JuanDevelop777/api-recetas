import recetasModel from "../models/recestasModel.js";

const recetasController = {
  createNewRecipe: async (req, res) => {
    try {
      const newRecipe = new recetasModel(req.body);
      const createdRecipe = await newRecipe.save();
      res.json({ menssage: "Receta creada", createdRecipe });
    } catch (error) {
      res.json({ menssage: "algo salio mal", error });
    }
  },

  getAllRecipes: async (req, res) => {
    try {
      const allRecipes = await recetasModel.find();
      res.json(allRecipes);
    } catch (error) {
      res.json({ menssage: "algo salio mal", error });
    }
  },

  getOneRecipe: async (req, res) => {
    try {
      const recipe = await recetasModel.findById(req.params.id);
      res.json(recipe);
    } catch (error) {
      res.json({ menssage: "algo salio mal", error });
    }
  },

  updateRecipe: async (req, res) => {
    try {
      const newInfo = await recetasModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json({ menssage: "the recipie was updated" });
    } catch (error) {
      res.json({ menssage: "algo salio mal", error });
    }
  },

  deleteRecipe: async (req, res) => {
    try {
      const recipeToBeDeleted = await recetasModel.findByIdAndDelete(
        req.params.id
      );
      res.json({ menssage: "the recipe was deleted" });
    } catch (error) {
      res.json({ menssage: "algo salio mal", error });
    }
  },
};

export default recetasController;
