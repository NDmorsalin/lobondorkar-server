// { getChefs, getChef, createChef, updateChef, deleteChef }
// get chefs from db
const Chef = require('../db/chef.json')

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


module.exports = { getChefs, getChef, createChef, updateChef, deleteChef }