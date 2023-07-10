const db = require('../../models')
const Category = db.category

async function DeleteCategory(req,res){
    try {
        const {id} = req.params
        await Category.destroy({where:{id}})
        res.json({
          msg: 'Categorias eliminada correctamente.'
        })
      } catch (error) {
        res.status(500).json({
          msg: 'Error al eliminar la categoria.',
          error: error
        })
    }
}

module.exports={
    DeleteCategory
}