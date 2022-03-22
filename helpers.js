const recipeDetailsFormat = function(data) {
  return {
    details: {
      ingredients: data[0].ingredients,
      numSteps: data[0].instructions.length
    }
  }
}

module.exports = {recipeDetailsFormat};