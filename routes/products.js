var express = require('express');
var router = express.Router();
var products = require('../models/products');

router.get('/products',function(req,res){
	res.render('products');
});

module.exports = router;