$(document).ready(function() {

  const recipes = window.recipes;
  const recipesArray = recipes.slice();

  $('.btn').click(function() {
    $('.clearMe').empty();
    let chosenRecipe = Math.floor(Math.random() * recipesArray.length);
    let recipe = (recipesArray[chosenRecipe]);
    $('.recipeArea').append(`
        <h2 class="subheading">${recipe.title}</h2>
        <img src=${recipe.image}> 
        <p class="blurb">${recipe.blurb}</p>
        <p class="ingredients">${recipe.ingredients}</p>
        <p class="method">${recipe.method}</p>
      `)

  })


})
