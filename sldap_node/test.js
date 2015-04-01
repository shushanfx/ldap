var sldap = require("./index");

sldap.check("dengjianxin", "shushanfx_D", function(err, msg){
    if(err){console.error(err); return ;}
    console.dir(msg);
});
sldap.check("dengjianxin", "shushanfx", function(err, msg){
    if(err){console.error(err); return ;}
    console.dir(msg);
});
sldap.check("shushanfx", "shushanfx", function(err, msg){
    if(err){console.error(err); return ;}
    console.dir(msg);
});