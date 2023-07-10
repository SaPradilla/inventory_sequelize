const express = require('express')
const router = express.Router()

const Create = require('../../controllers/product/CreateController')
const Read = require('../../controllers/product/ReadController')
const Edit = require('../../controllers/product/EditController')
router
    //Create
    .post('/create',Create.CreateProduct)
    // List id
    .get('/list/:id',Read.ListProductId)
    // List 
    .get('/list',Read.ListProduct)
    //Edit
    .put('/edit/:id',Edit.UpdateProduct)
    //Delete
    .delete('/delete/:id')

module.exports = router