const db = require('../../models')
const Sale = db.sale

async function EditSale(id_sale,client_name,client_phone,client_dni,sale_total){
    try {
        const UpdatedSale = await Sale.update({
            client_name: client_name,
            client_phone: client_phone,
            client_dni: client_dni,
            sale_total: sale_total
            },{ 
                where:{
                    id:id_sale
                }
            }
        )
        return UpdatedSale

      } catch (error) {
        throw(error)
    }
}

module.exports = EditSale
