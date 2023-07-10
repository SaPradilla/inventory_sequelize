const express = require('express')
const router = express.Router()
const Create = require('../../controllers/transaction/CreateController')
const Read = require('../../controllers/transaction/ReadController')
const Edit = require('../../controllers/transaction/EditController')

router 
    .post('/create',Create.CreateTransaction)
    .get('/list/:id',Read.ListTransactionId)
    .get('/list',Read.ListTransaction)
    .put('/edit/:id',Edit.UpdateTransaction)

module.exports = router