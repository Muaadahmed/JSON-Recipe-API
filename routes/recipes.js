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
    console.log("recipe....", recipesData.recipes[recipesData.recipes.indexOf(recipe)].name);
    if (recipesData.recipes[recipesData.recipes.indexOf(recipe)].name === req.body.name) {
      return res.json({ error: "Recipe already exists"}).status(400);
    }
  }

  recipesData.recipes.push(req.body);
  console.log(recipesData.recipes);
  
  console.log('POST ROUTE REACHED');
  res.send("POST ROUTE REACHED");
  console.log(req.body);
});

module.exports = router;
