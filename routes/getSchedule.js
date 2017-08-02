var router = require('express').Router();
var qs = require('querystring');
var URL = require('url');
var http = require('http');

router.get('/', function(req, res, next) {
    var args = URL.parse(req.url, true).query;

    var param = qs.stringify({ token: args.token,week: args.week});

    var str=''
    var option = {
        method: "GET",
        hostname: "42.244.42.160",
        port: 80,
        path: "/university-facade/Schedule/ScheduleList?" + param,
    }

    var req_ = http.request(option, function(resdata) {
    	resdata.setEncoding='UTF-8'
        resdata.on('data', function(data) {
        	str+=data
        });
        resdata.on('end',function(){
        	res.end(str)
        })
    })
    req_.end()

})

module.exports = router