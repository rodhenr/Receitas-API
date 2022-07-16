const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  ingredients: { type: [String], required: true },
  source: String,
  tags: [String],
  image: String,
});

recipeSchema.plugin(AutoIncrement, { inc_field: "recipeId" });

module.exports = mongoose.model("recipe", recipeSchema);
