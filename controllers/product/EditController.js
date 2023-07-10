const db = require('../../models')
const Product = db.product


async function UpdateProduct(req, res) {
    try {
        const {id} = req.params
        const newProduct = await Product.update({
            name: req.body.name,
            lot_number: req.body.lot_number,
            expiration_date: req.body.expiration_date,
            sales_price: req.body.sales_price,
            purchase_price: req.body.purchase_price,
            stock: req.body.stock,
            id_category: req.body.id_category,
            id_provider: req.body.id_provider
        },{
            where:{
                id
            }
        })
        res.json({
            msg: 'Producto actualizado correctamente',
            category: newProduct
        })
    } catch (error) {
        res.status(500).json({
        msg: 'Producto no actualizado correctamente',
        error: error
        })
    }
}
module.exports = {
    UpdateProduct
}
