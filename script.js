$(document).ready(function() {

  const recipes = window.recipes;
  const recipesArray = recipes.slice();

  function listIngredients(recipe) {
    let ingredients = recipe.ingredients;
    for (let i = 0; i < ingredients.length; i++) {
      $('.ingredientList').append(`
        <ul>${ingredients[i]}</ul>
        `)
    }
  }

  $('.btn').click(function() {
    $('.clearMe').empty();
    let chosenRecipe = Math.floor(Math.random() * recipesArray.length);
    let recipe = (recipesArray[chosenRecipe]);
    $('.recipeArea').append(`
        <h2 class="subheading">${recipe.title}</h2>
        <img src=${recipe.image}>
        <p class="blurb">${recipe.blurb}</p>
        <h4>Ingredients:</h4>
        <ul class="ingredientList"></ul>
        <p class="method">${recipe.method}</p>
      `)
      listIngredients(recipe);
  })


})
