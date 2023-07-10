const db = require('../../models')
const Category = db.category

async function CreateCategory(req, res) {
    try {
        const newCategory = await Category.create({
            name: req.body.name
        })
        res.json({
            msg: 'Categoria registrada correctamente',
            category: newCategory
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Categoria no registrada correctamente',
            error: error
        })
    }
}
module.exports = {
    CreateCategory
}
