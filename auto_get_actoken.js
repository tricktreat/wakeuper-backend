var https = require('https');
var qs = require('querystring');
var connection=require('./db/connection');

var options = {
    hostname: 'api.weixin.qq.com',
    port: 443,
    path: '/cgi-bin/token?grant_type=client_credential&appid=wxce0af3f23f9eee19&secret=3597e6cfb8339a61cacb77ced622d3f3',
    method: 'GET'
};

var req = https.request(options, function(res) {
	res.setEncoding('utf8');
	var str=''
    res.on('data', function(chunk) {
        str+=chunk
    });

    res.on('end', function(chunk) {
    	a=JSON.parse(str)
        connection.query('update access_token set access_token=\''+a.access_token+'\' where id=1',[],function(err,result){
        	console.log(new Date());
        	if(err){
        		console.log("错误信息：",err);
        	}
        })
    })
    
});

req.on('error',function(err){
            console.log(err);
        })

req.end();