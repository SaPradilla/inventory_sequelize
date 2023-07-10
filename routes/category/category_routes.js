const express = require('express')
const router = express.Router()

const Create = require('../../controllers/category/CreateController')
const List = require('../../controllers/category/ReadController')
const Edit = require('../../controllers/category/EditController')
const Delete = require('../../controllers/category/DeleteController')

router
    //create
    .post('/create',Create.CreateCategory)
    //ReadAll
    .get('/list',List.ListCategory)
    //Edit
    .put('/edit/:id',Edit.EditCategory)
    //Delete
    .delete('/delete/:id',Delete.DeleteCategory)


module.exports = router 