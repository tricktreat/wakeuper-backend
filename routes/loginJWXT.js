var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var http=require('http');


var option={
	method:"POST",
	hostname:"42.244.42.160",
	port:80,
	path:"/university-facade/Murp/sdLogin",
	headers:{"Content-Type": "application/json; charset=utf-8"}
}



router.post("/",function(req,res){
	var post_req=http.request(option,function(res_data){
		res_data.on('data',function(data){  
        	res.end(data)
    	});  
	})
	post_req.write(JSON.stringify(req.body))
	post_req.end();   //必须接受请求
})

module.exports=router;