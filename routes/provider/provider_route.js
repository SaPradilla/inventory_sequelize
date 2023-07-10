const express = require('express')
const router = express.Router()

const Create = require('../../controllers/provider/CreateController')
const List = require('../../controllers/provider/ReadController')
const Edit = require('../../controllers/provider/EditController')
const Delete = require('../../controllers/provider/DeleteController')
router
    // Create
    .post('/create',Create.CreateProvider)
    // List
    .get('/list',List.ListProvider)
    //Edit
    .put('/edit/:id',Edit.EditProvider)
    //Delete
    .delete('/delete/:id',Delete.DeleteProvider)


module.exports = router