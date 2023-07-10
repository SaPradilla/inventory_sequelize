const db = require('../../models')
const Category = db.category

async function EditCategory(req,res){
    try {
        const {id} = req.params
        await Category.update(
            {
                name:req.body.name
            },{ 
                where:{
                    id
                }
            }
        )
        res.json({
          msg: 'Categorias actualizada correctamente.'
        })
      } catch (error) {
        res.status(500).json({
          msg: 'Error al actualizada la categoria.',
          error: error
        })
    }
}

module.exports={
    EditCategory
}