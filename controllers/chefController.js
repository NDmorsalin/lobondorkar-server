// { getChefs, getChef, createChef, updateChef, deleteChef }
// get chefs from db
const Chef = require('../db/chef.json')
const Recipes = require('../db/recipe.json')

// get all recipes for a chef
const getChefRecipes = async (req, res) => {
    const { id } = req.params

    const recipes = Recipes.filter(recipe => recipe.chef_id.toLocaleLowerCase() === id?.toLocaleLowerCase())
    if (!recipes) {
        return res.status(404).json({ message: 'recipes not found' })
    }
   
    res.json(recipes)

}


const getChefs = async (req, res) => {
    
    res.json(Chef)

}
const getChef = async (req, res) => {
    const { id } = req.params
    const chef = Chef.find(cf => cf.chef_id.toLocaleLowerCase() === id?.toLocaleLowerCase())
    if (!chef) {
        return res.status(404).json({ message: 'Chef not found' })
    }
    
    res.json(chef)


}
const createChef = async (req, res) => {

}
const updateChef = async (req, res) => {

}
const deleteChef = async (req, res) => {

}


module.exports = { getChefs, getChef, createChef, updateChef, deleteChef ,getChefRecipes}