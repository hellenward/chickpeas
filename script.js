$(document).ready(function() {

  const recipes = window.recipes;
  const recipesArray = recipes.slice();

  function listIngredients(recipe) {
    let ingredients = recipe.ingredients;
    for (let i = 0; i < ingredients.length; i++) {
      $('.ingredientList').append(`
        <li>${ingredients[i]}</li>
        `)
    }
  }

  function listMethod(recipe) {
    let methodPoints = recipe.method;
    for (let i = 0; i < methodPoints.length; i++) {
      $('.methodList').append(`
        <li>${methodPoints[i]}</li>
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
        <ol class="methodList"></ol>
      `)
      listIngredients(recipe);
      listMethod(recipe);
  })


})
