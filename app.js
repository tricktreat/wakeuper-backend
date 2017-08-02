var app=require('express')();
var fs = require('fs');
var https=require('https');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

// 配置ssl证书
var privateKey = fs.readFileSync('cert/2_www.ibilidi.cn.key', 'utf8');
var certificate = fs.readFileSync('cert/1_www.ibilidi.cn_bundle.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };

var httpsServer = https.createServer(credentials, app);

var SSLPORT = 443;

// 中间件
var userRegister=require('./routes/userRegister')
var getOpenid=require('./routes/getOpenid')
var getUserInfo=require('./routes/getUserInfo')
var getBroadcast=require('./routes/getBroadcast')
var addBroadcast=require('./routes/addBroadcast')
var getIndexImg=require('./routes/getIndexImg')
var setInfo=require('./routes/setInfo')
var loginJWXT=require('./routes/loginJWXT')
var getMyLessons=require('./routes/getMyLessons')
var getAboutUs=require('./routes/getAboutUs')
var joinClub=require('./routes/joinClub')
var signIn=require('./routes/signIn')
var getSchedule=require('./routes/getSchedule')
var delBroadcast=require('./routes/delBroadcast')
var getLastSignTime=require('./routes/getLastSignTime')
var getSignRecToday=require('./routes/getSignRecToday')





// 创建https服务
httpsServer.listen(SSLPORT,function(){
	console.log('HTTPS Server Running ...');
});

// 主页
app.get('/',function(req,res){
	res.status(200).send("这里是wakeup俱乐部微信小程序后台。相关接口暂时不对外开放。")
});


// 路由绑定中间件
app.use('/getUserInfo',getUserInfo);
app.use('/userRegister',userRegister);
app.use('/getOpenid',getOpenid);
app.use('/getBroadcast',getBroadcast);
app.use('/addBroadcast',addBroadcast);
app.use('/getIndexImg',getIndexImg);
app.use('/setInfo',setInfo);
app.use('/loginJWXT',loginJWXT);
app.use('/getMyLessons',getMyLessons);
app.use('/getAboutUs',getAboutUs);
app.use('/joinClub',joinClub);
app.use('/signIn',signIn);
app.use('/getSchedule',getSchedule);
app.use('/delBroadcast',delBroadcast);
app.use('/getLastSignTime',getLastSignTime);
app.use('/getSignRecToday',getSignRecToday);
