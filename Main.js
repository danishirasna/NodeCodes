const express = require('express');
var fs = require('fs');
const app = express();
var url = require('url');
const conection=require('./Connection')

const port =process.env.PORT || 5050;

const checkUrl=function(req,res,go){
    console.warn("Current Route is",req.url);
    go();
}
app.use(checkUrl);




app.get('/', (req, res) => {  
    
    conection.MySqlCon();
   
    ReadFile1('./Home.html', res);  
   
});
app.get('/about', (req, res) => {   
    ReadFile1('./About.html', res);  
   
});
app.get('/contact', (req, res) => {  
    
    ReadFile1('./ContactUs.html', res);  
   
});
app.get('/home', (req, res) => {   
   
    ReadFile1('./Home.html', res);  
   
});

app.listen(port, () => {
    console.log(`server Is running On:${port}`)
});
function ReadFile1(path, responce) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {

            responce.send(err);
        } else {
            responce.send(data);
        }
    });
}
