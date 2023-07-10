const db = require('../../models')
const Category = db.category

async function ListCategory(req, res) {
  try {
    const categories = await Category.findAll()
    res.json({
      msg: 'Categorias visualizadas correctamente.',
      categories: categories
    })
  } catch (error) {
    res.status(500).json({
      msg: 'No se encontraron categorias.',
      error: error
    })
  }
}

module.exports = {
  ListCategory
}