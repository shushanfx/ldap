SLDAP
-----
  通过LDAP，对用户名密码进行校验。  
  当具有以下使用场景时：  
  1. 使用一个通用用户名，密码进行校验； 
  2. 通过某个特定的属性获取用户信息；
  3. 通过该用户的dn及密码，能够登录至ldap服务器；

INSTALL
-------
    
    npm install sldap_node

Usage
-----

    var sldap = require("sldap_node");  
    sldap.setConfig({ 
      host: '',// host    
      port: '',// port     
      commonDN: '',// username    
      commonPW: '',// password     
    });   
    sldap.check(username, password, function(err, msg){    
      if(err){console.error(err);}   
      // handle the result...    
    })  
