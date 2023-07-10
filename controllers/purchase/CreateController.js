const db = require('../../models')
const Purchase = db.purchase


async function CreatePurchase(id_provider,total_purchase){

    const newPurchase = await Purchase.create({
        id_provider: id_provider,
        total_purchase: total_purchase
    })

    return newPurchase    
}

module.exports = CreatePurchase
