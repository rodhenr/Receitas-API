const Recipe = require("../models/recipe.model");

const getRecipesList = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.status(200).json({ data: recipe });
  } catch (err) {
    res.status(500).send("Erro inesperado no servidor...");
  }
};

const getOneRecipe = async (req, res) => {
  res.send("Deu certo!");
};

module.exports = { getRecipesList, getOneRecipe };
