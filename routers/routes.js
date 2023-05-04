const routes = require('express').Router();
const { getChefRecipes, deleteChef, getChef, getChefs, updateChef } = require('../controllers/chefController')

const { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } = require('../controllers/recipeController')

/* chef Recipes routes  */
routes.route('/chefRecipes/:id')
    .get(getChefRecipes) // get all recipes for a chef


/* Recipes Routes */

routes.route('/recipes')
    .get(getRecipes)// get all recipes
//.post(createRecipe); // create a recipe

routes.route('/recipe/:id')
    .get(getRecipe)// get a recipe
//.put(updateRecipe) // update a recipe
//.delete(deleteRecipe); // delete a recipe



/* Chefs routes */
routes.route('/chefs')
    .get(getChefs)// get all chefs
//.post(createChef); // create a chef

routes.route('/chef/:id')
    .get(getChef) // get a chef
//.put(updateChef) // update a chef
//.delete(deleteChef); // delete a chef


module.exports = routes;
