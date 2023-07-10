const db = require('../../models')
const Refund = db.refund

async function EditRefund(id_refund,id_sale,client_name,client_phone,client_dni,refund_total,refund_reason){
    try {
        const UpdatedRefund = await Refund.update({
            id_sale:id_sale,
            client_name:client_name,
            client_phone:client_phone,
            client_dni:client_dni,
            refund_total:refund_total,
            refund_reason:refund_reason
            },{ 
                where:{
                    id:id_refund
                }
            }
        )
        return UpdatedRefund

      } catch (error) {
        throw(error)
    }
}

module.exports = EditRefund
