const db = require('../../models')
const Transaction = db.transaction
const Product = db.product
const CreatePurchase = require('../purchase/CreateController')
const CreateSale = require('../sale/CreateController')
const CreateRefund = require('../refund/CreateController')



async function CreateTransaction(req, res) {
    try {
        const {
            id_product,
            type_transaction,
            quantity,
            id_provider,
            total_purchase,
            client_name,
            client_phone,
            client_dni,
            sale_total,
            id_sale,
            refund_total,
            refund_reason
        } = req.body

        const transaction = await Transaction.create({
            id_product,
            type_transaction,
            quantity
        })
        
        if (type_transaction === "purchase") {
            
            const newPurchase = await CreatePurchase(id_provider,total_purchase)

            await Transaction.update(
                { id_purchase: newPurchase.id },
                { where: { id: transaction.id } }
            )
            await Product.increment({stock: transaction.quantity},{where:{id:transaction.id_product}})
            
            res.json({
                msg: 'Compra creada correctamente.',
                Purchase: newPurchase
            })
            
        } else if (type_transaction === "sale") {
            
            const newSale = await CreateSale(client_name,client_phone,client_dni,sale_total)
            
            await Product.increment({stock: -transaction.quantity},{where:{id:transaction.id_product}})
            
            await Transaction.update(
                { id_sale: newSale.id },
                { where: { id: transaction.id } }
            )
            res.json({
                msg: 'Venta creada correctamente.',
                Sale: newSale
            })

        } else {
            const newRefund = await CreateRefund(id_sale,client_name,client_phone,client_dni,refund_total,refund_reason)
            
            await Transaction.update(
                {id_refund: newRefund.id},
                {where: {id: transaction.id}}
            )   
                
            await Product.increment({stock: transaction.quantity},{where:{id:transaction.id_product}})

            res.json({
                msg: 'Devolución creada correctamente.',
                Refund: newRefund
            })
            
        }

    } catch (error) {
        res.status(500).json({
        msg: 'Error al crear la transacción.',
        error: error
        })
    }
}

module.exports = {
  CreateTransaction
};
