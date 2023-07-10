const db = require('../../models')
const Sale = db.sale


async function CreateSale(client_name,client_phone,client_dni,sale_total){

    const newSale = await Sale.create({
        client_name: client_name,
        client_phone: client_phone,
        client_dni: client_dni,
        sale_total: sale_total
    })

    return newSale  
}

module.exports = CreateSale
