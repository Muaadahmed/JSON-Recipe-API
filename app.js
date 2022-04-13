const express = require('express');
const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipes.js');

const app = express();
app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);

app.listen(8000, () => {
  console.log("listening ...");
})