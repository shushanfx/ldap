var sldap = require("./index");

sldap.check("dengjianxin", "dengjianxin", function(err, msg){
    if(err){console.error(err); return ;}
    console.dir(msg);
});
