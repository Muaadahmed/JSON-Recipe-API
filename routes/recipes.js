const express = require("express");

const router = express.Router();

const recipesData = require('../data/JSON-recipe.json');
const {recipeDetailsFormat, recipeNameList} = require('../helpers');

router.get('/', (req, res) => {
  const allRecipes = recipeNameList(recipesData);
  res.json({allRecipes});
});

router.get('/details/:name', (req, res) => {
  const recipeDetails = recipesData.recipes.filter(recipe => recipe.name === req.params.name);
  recipeDetails.length > 0 ? res.json(recipeDetailsFormat(recipeDetails)): res.json({}).status(200);
});

router.post('/', (req, res) => {

  for (let recipe of recipesData.recipes) {
    if (recipesData.recipes[recipesData.recipes.indexOf(recipe)].name === req.body.name) {
      return res.json({ error: "Recipe already exists"}).status(400);
    }
  }

  recipesData.recipes.push(req.body);
  
  res.send({}).status(201);
});

router.put('/:name', (req, res) => {
  const {name} = req.params;
  const {ingredients, instructions} = req.body; 

  const recipe = recipesData.recipes.find((recipe) => recipe.name === name);
  
  if (recipe === undefined) {
    return res.send({error: "Recipe does not exist"}).status(404);
  }

  if (ingredients) {
    recipe.ingredients = ingredients;
    console.log("recipe ingredient changes ", recipe.ingredients)
  }

  if (instructions) {
    recipe.instructions = instructions;
    console.log("recipe instructions changes ", recipe.instructions)
  }

  recipesData.recipes[recipesData.recipes.indexOf(recipe)] = recipe;
  console.log("recipe Data MOD: ", recipesData.recipes);
  res.send({}).status(204);
});

module.exports = router;
