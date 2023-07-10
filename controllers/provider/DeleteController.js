const db = require('../../models')
const Provider = db.provider

async function DeleteProvider(req,res){
    try{
        const {id} = req.params

        await Provider.destroy({
            where:{
                id
            }
        })
        res.json({
            msg:'Proveedor borrado correctamente'
        })
    }catch(error){
        res.status(500).json({
            msg:'Error al borrar proveedor.',
            error:error
        })
    }
}

module.exports= {
    DeleteProvider
}