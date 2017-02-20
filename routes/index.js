var router = require('koa-router')();
var rp = require('request-promise');
var request = require('request');


router.get('/', async function (ctx, next) {
  console.log('================================');
  var res = await http.get('http://jiyan.c2567.com/api.php/Public6/checkUserInfo?user=test3&md5=f41a1eb08eda8efe049c6f680769d4ae',false);
  console.log(res);
  ctx.body = res;
})
module.exports = router;



global.http={};
http.get = async(options,noHttpProxy) => {
    return new Promise( async (resolve, reject) => {
        if( noHttpProxy == true){
            options.proxy = "";
            options.headers['proxy-authorization'] = "";
        }
        rp(options)
             .then(function (htmlString) {
                 resolve({
                     status:true,
                     msg:htmlString
                 });
             })
             .catch(function (err) {
                 //console.log(err);
                 log.debug("访问失败 %j",options);
                 resolve({
                     status:false,
                     msg:"访问失败,"+err.message,
                 });
             });

    });
}
