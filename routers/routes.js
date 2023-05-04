const routes = require('express').Router();
const { createChef, deleteChef, getChef, getChefs, updateChef } = require('../controllers/chefController')

const { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } = require('../controllers/recipeController')



/* Recipes Routes */

routes.route('/recipes')
    .get(getRecipes)// get all recipes
//.post(createRecipe); // create a recipe

routes.route('/recipes/:id')
    .get(getRecipe)// get a recipe
//.put(updateRecipe) // update a recipe
//.delete(deleteRecipe); // delete a recipe



/* Chefs routes */
routes.route('/chefs')
    .get(getChefs)// get all chefs
//.post(createChef); // create a chef

routes.route('/chefs/:id')
    .get(getChef) // get a chef
//.put(updateChef) // update a chef
//.delete(deleteChef); // delete a chef


module.exports = routes;
