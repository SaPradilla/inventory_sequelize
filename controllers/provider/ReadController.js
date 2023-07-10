const db = require('../../models')
const Provider = db.provider

async function ListProvider(req,res){
    try{
        const providers = await Provider.findAll()
        res.json({
            msg:'Proveedores visualizados correctamente.',
            providers: providers
        })

    } catch(error){
        res.status(404).json({
            msg:'No se encontraron proveedores',
            error:error
        })
    }
    
}

module.exports={
    ListProvider
}