const recipesData = require('./data/JSON-recipe');
const {recipeDetailsFormat, recipeNameList} = require('./helpers');
const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log("connected...");
})

app.get('/recipes', (req, res) => {
  const allRecipes = recipeNameList(recipesData);
  res.json({allRecipes});
})

app.get('/recipes/details/:name', (req, res) => {
  const recipeDetails = recipesData.recipes.filter(recipe => recipe.name === req.params.name);
  recipeDetails.length > 0 ? res.json(recipeDetailsFormat(recipeDetails)): res.json({});
})

app.post('/recipes', (req, res) => {
  const {name} = req.body;
  const allRecipes = recipeNameList(recipesData);
  for (let recipe of allRecipes){
    recipe.name === name ? res.json({ error: "Recipe already exists"}): 
      recipesData.recipes.push(req.body);
  }
})