var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	connection.query('delete from broadcast where id=$1',[args.id],function(err,result){
		if(err){
			res.send(err);
		}
		res.send(result);
	})
})

module.exports = router

