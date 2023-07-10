const db = require('../../models')
const Provider = db.provider

async function EditProvider (req,res){
    try{    
        const {id} = req.params
        await Provider.update({
            name_brand: req.body.name_brand,
            address: req.body.address,
            phone: req.body.phone
        },{
            where:{
                id
            }
        }
        )
        res.json({
            msg:'Proveedor actualizado correctamente.'
        })

    } catch(error){
        res.status(500).json({
            msg:'Error al editar proveedor.'
        })
    }
}

module.exports={
    EditProvider
}