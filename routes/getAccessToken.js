var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	connection.query('select * from access_token',[],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err);
		}
		res.send(result);
	})
})

module.exports=router