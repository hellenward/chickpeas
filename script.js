$(document).ready(function() {

  const recipes = window.recipes;
  const recipesArray = recipes.slice();

  $('.btn').click(function() {
    $('.clearMe').empty();
    let chosenRecipe = Math.floor(Math.random() * recipesArray.length);
    console.log(recipesArray[chosenRecipe]);


  })


})
