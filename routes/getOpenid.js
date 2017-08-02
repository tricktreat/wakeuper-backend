var express=require("express");
var https=require('https');
var router = express.Router();
var qs = require('querystring');
var URL = require('url');

router.get('/', function(req, res,next) {
    //ea79a35012efb7851d35194cdf389c33
    //wxce0af3f23f9eee19
    var args = URL.parse(req.url, true).query;
    var param = { appid: "wxce0af3f23f9eee19", secret: "ea79a35012efb7851d35194cdf389c33", js_code: args.code, grant_type: "authorization_code" }; //这是需要提交的数据  
    var param = qs.stringify(param);
    https.get('https://api.weixin.qq.com/sns/jscode2session?' + param, function(resdata) {
        resdata.on('data', function(data) {
            res.end(data);
        });
    })
});

module.exports=router;