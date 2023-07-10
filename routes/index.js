const express = require('express');
const router = express.Router();

const categoryRoute = require('./category/category_routes');
const providerRoute = require('./provider/provider_route')
const productRoute = require('./products/product_routes')
const transactionRoute = require('./transaction/transaction_route')

const routersList =[
   {
       path:'/category',
       route: categoryRoute
   },
   {
        path:'/provider',
        route: providerRoute

   },{
        path:'/product',
        route:productRoute
   },{
        path:'/transaction',
        route:transactionRoute
    }
];


routersList.forEach((route) =>{
    router.use(route.path, route.route)
});

module.exports = router;

