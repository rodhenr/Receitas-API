const express = require("express");
const router = express.Router();
const {
  getRecipesList,
  getOneRecipe,
} = require("../controllers/api.controller");

router.get("/", getRecipesList);

module.exports = router;
