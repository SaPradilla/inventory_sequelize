const db = require('../../models')
const Refund = db.refund


async function CreateRefund(id_sale,client_name,client_phone,client_dni,refund_total,refund_reason){

    const newRefund = await Refund.create({
        id_sale:id_sale,
        client_name:client_name,
        client_phone:client_phone,
        client_dni:client_dni,
        refund_total:refund_total,
        refund_reason:refund_reason
    })

    return newRefund  
}

module.exports = CreateRefund
