// { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe }
// get recipes from db
const Recipe = require('../db/recipe.json')

const getRecipes = async (req, res) => {
    try {
        const recipes = Recipe
        res.json(recipes)

    } catch (error) {
        console.log(error);
    }
}
const getRecipe = async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        const recipe = Recipe.find(rcp=> rcp.recipe_id.toLocaleLowerCase() === id?.toLocaleLowerCase())
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' })
        }
        res.json(recipe)

    } catch (error) {
        console.log(error);
    }
}
const createRecipe = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}
const updateRecipe = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}
const deleteRecipe = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}