const recipesData = require('./data/JSON-recipe');
const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log("connected...");
})

app.get('/recipes', (req, res) => {
  const recipeNameList = recipesData.recipes.map(recipe => recipe.name);
  res.json({recipeNameList});
})