var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	var args = URL.parse(req.url, true).query;
})

module.exports=router