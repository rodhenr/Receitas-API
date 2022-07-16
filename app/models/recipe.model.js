const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  ingredients: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.length > 1;
      },
      message: "Você deve adicionar ao menos um 1 ingrediente",
    },
  },
  source: { type: String, default: "" },
  tags: { type: [String], default: [] },
  image: { type: String, default: "" },
});

recipeSchema.plugin(AutoIncrement, { inc_field: "recipeId" });

module.exports = mongoose.model("recipe", recipeSchema);
