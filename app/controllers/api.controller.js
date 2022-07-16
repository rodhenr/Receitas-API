const Recipe = require("../models/recipe.model");

const getRecipesList = async (req, res) => {
  try {
    const recipe = await Recipe.find({}, "-_id -__v");
    res.status(200).json({ data: recipe });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro...", error: err.message });
  }
};

const getOneRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findOne({ recipeId: id }, "-_id -__v");

    if (!recipe)
      return res.status(400).json({
        message: "Receita não encontrada",
        error: `A receita de id ${id} não foi localizada no banco de dados.`,
      });

    res.status(200).json({ data: recipe });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro...", error: err.message });
  }
};

const addRecipe = async (req, res) => {
  const data = req.body;

  try {
    await Recipe.create({
      name: data?.name,
      description: data?.description,
      ingredients: data?.ingredients?.split(/,\s*/),
      source: data?.source,
      tags: data?.tags?.split(/,\s*/),
      image: data?.image,
    });

    res.status(200).json({ message: "Cadastro efetuado com sucesso!" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Ocorreu um erro no cadastro...", error: err.message });
  }
};

const updateRecipe = async (req, res) => {
  const { field, id } = req.params;
  const { data } = req.body;

  try {
    const recipe = await Recipe.findOne({ recipeId: id });
    recipe[field] = Object.values(data)[0];
    await recipe.save();
    res
      .status(200)
      .json({ message: `Campo '${field}' modificado com sucesso.` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro no cadastro...", error: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.deleteOne({ recipeId: id });

    if (recipe.deletedCount === 0)
      return res.status(400).json({
        message: "Receita não encontrada",
        error: `A receita de id ${id} não foi localizada no banco de dados.`,
      });

    res.status(200).json({ message: "Receita removida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Ocorreu um erro...", error: err.message });
  }
};

module.exports = {
  addRecipe,
  deleteRecipe,
  getOneRecipe,
  getRecipesList,
  updateRecipe,
};
