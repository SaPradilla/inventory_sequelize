const db = require('../../models')
const Product = db.product

async function ListProduct(req,res){
  
    try{
        const products = await Product.findAll({
            include:[{
                model: db.category,
            },{
                model: db.provider,
            }]
        })
        res.json({
            msg: 'Productos visualizados correctamente.',
            products: products
        })
    } catch (error) {
        res.status(500).json({
          msg: 'Error al visualizar los productos.',
          error: error
        })
    }

    
}


async function ListProductId(req,res){
    try {
        const {id} = req.params
        const product = await Product.findAll({
            where:{
                id
            },include:[{
                model: db.category,
            },{
                model: db.provider,
            }]
        })
        res.json({
          msg: 'Producto visualizado correctamente.',
          product: product
        })
      } catch (error) {
        res.status(500).json({
          msg: 'Error al visualizar el producto.',
          error: error
        })
      }
}

module.exports={
    ListProduct,
    ListProductId
}