const recipesData = require('./data/JSON-recipe');
const {recipeDetailsFormat} = require('./helpers');
const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log("connected...");
})

app.get('/recipes', (req, res) => {
  const recipeNameList = recipesData.recipes.map(recipe => recipe.name);
  res.json({recipeNameList});
})

app.get('/recipes/details/:name', (req, res) => {
  const recipeDetails = recipesData.recipes.filter(recipe => recipe.name === req.params.name);
  res.json(recipeDetailsFormat(recipeDetails));
})