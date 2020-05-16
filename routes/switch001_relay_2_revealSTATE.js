var express = require("express");
var router = express.Router();

try {
	
    var fs = require('fs');
    var array = fs.readFileSync('SWITCH_IP.ini').toString().split("\n");
    
    var a1="http://";
    var a2= array[0].replace(/(\r\n|\n|\r)/gm, "");
    var a3="/restapi/relay/outlets/2/state/";   

    var address=a1+a2+a3

    console.log(address)    
        
    } catch (err) {
      console.error(err)
    }

router.get("/",function(req,res,next){




//function myFunction() {
	

///////////////////////////////////////

    var request = require('request');
 

var headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
 
};


var options = {
         // url: 'http://10.172.103.18/restapi/relay/outlets/2/state/',  

         url: address,

    method: 'GET',
    'followRedirect': true,
    'followAllRedirects': true,
    headers: headers,
  
    'sendImmediately': false,
    auth: {
        'user': 'admin',
        'pass': 'goodman123',
        'sendImmediately': false
    }
};

////////////////////////////////////////



    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("body is " + body); 
            res.send(body);

            
        }
        else{
            console.log("fail");
            console.log(error);
        }   
    }
    request(options, callback);

    


   // } 
    
   // myFunction(); 



    });

module.exports=router;
