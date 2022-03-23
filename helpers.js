const recipeDetailsFormat = function(data) {
  return {
    details: {
      ingredients: data[0].ingredients,
      numSteps: data[0].instructions.length
    }
  }
}

const recipeNameList = function(data) {
  return data.recipes.map(recipe => recipe.name);
};

module.exports = {recipeDetailsFormat, recipeNameList};