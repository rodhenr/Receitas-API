const Recipe = require("../models/recipe.model");

const getRecipesList = async (req, res) => {
  try {
    const recipe = await Recipe.find({}, "-_id -__v");
    res.status(200).json({ data: recipe });
  } catch (err) {
    res.status(500).send("Erro inesperado no servidor...");
  }
};

const getOneRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findOne({ recipeId: id }, "-_id -__v");

    res.status(200).json({ data: recipe });
  } catch (err) {}
};

const addRecipe = async (req, res) => {
  const { name, description, ingredients, source, tags, image } = req.body;

  const ingredientsArray = ingredients.split(/,\s*/);
  const tagsArray = tags.split(/,\s*/);

  if (!name || !description || !ingredients || !source || !tags || !image)
    return res.send("Ops... Estão faltando informações!");

  try {
    await Recipe.create({
      name,
      description,
      ingredients: ingredientsArray,
      source,
      tags: tagsArray,
      image,
    });

    res.status(200).send("Cadastro efetuado com sucesso!");
  } catch (err) {
    res.status(500).send("Ocorreu um erro no cadastro...");
  }
};

const updateRecipe = async (req, res) => {
  const { field, id } = req.params;
  const data = req.body;

  try {
    const recipe = await Recipe.findOne({ recipeId: id });
    recipe[field] = Object.values(data)[0];
    await recipe.save();
    res.status(200).send("Receita modificada com sucesso");
  } catch (err) {
    res.status(500).send("Ocorreu um erro no cadastro...");
  }
};

module.exports = { getRecipesList, getOneRecipe, addRecipe, updateRecipe };
