const db = require('../../models')
const Purchase = db.purchase

async function EditPurchase(id_purchase,id_provider,total_purchase){
    try {
        const UpdatedPurchase = await Purchase.update({
            id_provider: id_provider,
            total_purchase: total_purchase
            },{ 
                where:{
                    id:id_purchase
                }
            }
        )
        return UpdatedPurchase

      } catch (error) {
        throw(error)
    }
}

module.exports = EditPurchase
