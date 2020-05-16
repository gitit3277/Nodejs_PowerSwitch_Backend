var express = require("express");
var router = express.Router();







try {
	
    var fs = require('fs');
    var array = fs.readFileSync('SWITCH_IP.ini').toString().split("\n");
    
    var a1="http://";
    var a2= array[0].replace(/(\r\n|\n|\r)/gm, "");
    var a3="/restapi/relay/outlets/5/state/";   

    var address=a1+a2+a3

    console.log(address)    
        
    } catch (err) {
      console.error(err)
    }
    
    router.get("/",function(req,res,next){
    res.send("API is working properly");



//function myFunction() {
	
    var request = require('request');
    
    var headers = {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Digest username="admin", realm="DLI LPC92409032242", nonce="DOA9wIbdY+DPqk9H", uri="/restapi/relay/outlets/5/state/", algorithm="MD5", response="ca543fcbfa644e20a26f045bd3906b6c", opaque="EcJeiIauopi9IlPG"'
    
    };
    
    var dataString = 'false';
    
    var options = {
              // url: 'http://10.172.103.18/restapi/relay/outlets/5/state/',  

              url: address,

        method: 'PUT',
        'followRedirect': true,
        'followAllRedirects': true,
        headers: headers,
        body: dataString,
        'sendImmediately': false,
        auth: {
            'user': 'admin',
            'pass': 'goodman123',
            'sendImmediately': false
            
        }
    };
    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        else{
            console.log("fail");
            console.log(error);
        }   
    }
    request(options, callback);        
    //} 
    
    //myFunction(); 



    });

module.exports=router;
