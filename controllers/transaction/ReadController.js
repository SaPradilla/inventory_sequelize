
const db = require('../../models')
const Transaction = db.transaction


async function ListTransaction(req, res) {

  try {
    const transactions = await Transaction.findAll({
      include: [
        {
          model: db.product,
          include:[
            {
              model:db.category
            }
          ]

        },
        {
          model: db.purchase,
          include: [
            {
              model: db.provider,

            }
          ],
          optional: true
        },
        {
          model: db.refund,
          optional: true,
          include: [
            {
              model: db.sale,

            }
          ]
        },
        {
          model: db.sale,
          optional: true
        }

      ]
    })
    res.json({
      msg: 'Transacciones visualizadas correctamente.',
      transactions: transactions
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al visualizar las transacciones.',
      error: error
    })
  }


}


async function ListTransactionId(req, res) {
  try {
    const { id } = req.params
    const transaction = await Transaction.findAll({
      where:{
          id
      },
      include: [
        {
          model: db.product,
          include:[
            {
              model:db.category
            }
          ]

        },
        {
          model: db.purchase,
          include: [
            {
              model: db.provider,

            }
          ],
          optional: true
        },
        {
          model: db.refund,
          optional: true,
          include: [
            {
              model: db.sale,

            }
          ]
        },
        {
          model: db.sale,
          optional: true
        }
      ]
  })

    res.json({
      msg: 'Transaccion visualizada correctamente.',
      transaction: transaction
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al visualizar la transaccion.',
      error: error
    })
  }
}

module.exports = {
  ListTransaction,
  ListTransactionId
}