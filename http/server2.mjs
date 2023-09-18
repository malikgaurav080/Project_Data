
import http from 'http';
import fs from 'fs';


fs.readFile('./Portfolio.html',(err, html) =>{
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000, ()=>{
        console.log("server is running on Port 8000");
    });
});