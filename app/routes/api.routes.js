const express = require("express");
const router = express.Router();
const {
  getRecipesList,
  getOneRecipe,
  addRecipe,
  updateRecipe,
} = require("../controllers/api.controller");

router.get("/", getRecipesList);
router.get("/:id", getOneRecipe);

router.post("/", addRecipe);
router.patch("/:id/:field", updateRecipe);

module.exports = router;
