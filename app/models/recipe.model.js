const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: [String],
  ingredients: { type: String, required: true },
  source: String,
  tags: String,
  image: String,
});

module.exports = mongoose.model("recipe", recipeSchema);
