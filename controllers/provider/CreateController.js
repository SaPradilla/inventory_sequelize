const db = require('../../models')
const Provider = db.provider

async function CreateProvider(req,res){
    try{
        const newProvider = await Provider.create({
            name_brand:req.body.name_brand,
            address: req.body.address,
            phone: req.body.phone
        })
        res.json({
            msg:'Proveedor creado correctamente.',
            provider: newProvider
        })

    } catch(error){
        
        res.status(500).json({
            msg:'Error el crear el proveedor.',
            error: error
        })
    }
}

module.exports= {
    CreateProvider
}