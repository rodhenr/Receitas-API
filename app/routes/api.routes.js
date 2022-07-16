const express = require("express");
const router = express.Router();
const {
  getRecipesList,
  getOneRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/api.controller");
const { updateCheck } = require("../middlewares/api.middleware");

router.get("/", getRecipesList);
router.get("/:id", getOneRecipe);
router.post("/", addRecipe);
router.patch("/:id/:field", updateCheck, updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
