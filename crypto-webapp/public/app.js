const express = require("express");
const https=require("https");

const app = express();
app.get('/', function(req,res)){
    const url ="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum&vs_currencies=usd"
    https.get(url, function(response){
        console.log(response)
    });

    res.send();
}

app.listen(3000, function(){
    console.log("server running")
})