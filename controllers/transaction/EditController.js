const db = require('../../models')
const Transaction = db.transaction

const UpdatedPurchase = require('../purchase/EditController')
const UpdatedSale = require('../sale/EditController')
const UpdatedRefund = require('../refund/EditController')
async function UpdateTransaction(req, res) {
    try {
        const {
            id_product,
            quantity,
            date_transaction,
            id_provider,
            date_purchase,
            total_purchase,
            client_name,
            client_phone,
            client_dni,
            sale_date,
            sale_total,
            refund_date,
            refund_total,
            refund_reason
        } = req.body
    
        const { id } = req.params
        const updateTransaction = await Transaction.update({
            id_product: id_product,
            quantity: quantity,
            date_transaction: date_transaction

        }, {
            where: {
                id
            }
        })

    
        const transaction = await Transaction.findByPk(id)

        if (transaction.type_transaction === 'purchase') {
            try{

                const id_purchase = transaction.id_purchase
                const updatePurchase = await UpdatedPurchase(id_purchase, id_provider, date_purchase, total_purchase)

                if(quantity){
                    await Product.increment({stock: transaction.quantity},{where:{id:transaction.id_product}})

                }else{

                }

                res.json({
                    msg: 'Compra actualizada correctamente.',
                    updatePurchase: updatePurchase
                })
            } catch(error){
                res.json({
                    msg: 'Error al actualizar la compra.',
                    error: error
                })
            }
            
        } else if (transaction.type_transaction === 'sale') {
            try{

                const id_sale = transaction.id_sale
                
                const updateSale = await UpdatedSale(id_sale, client_name, client_phone, client_dni, sale_date, sale_total)

                res.json({
                    msg: 'Venta actualizada correctamente.',
                    updateSale: updateSale
                })
            }catch(error){
                res.json({
                    msg: 'Error al actualizar la venta.',
                    error: error
                })
            }

        } else {
            try{

                const id_refund = transaction.id_refund
                const updatedRefund = await UpdatedRefund(id_refund, id_sale, client_name, client_phone, client_dni, refund_date, refund_total, refund_reason)

                res.json({
                    msg: 'Devolución actualizada correctamente.',
                    updatedRefund: updatedRefund
                })
            }catch(error){
                res.json({
                    msg: 'Error al actualizar la devolución.',
                    error: error
                })
            }
           
        }
        //res.json('Transaccion actualizada correctamente.')
        
    } catch (error) {
        res.json({
            msg: 'Error al actualizar la transaccion.',
            error: error
        })
    }




}

module.exports = {
    UpdateTransaction
}


