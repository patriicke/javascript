const http=require('http');
const PORT=5000;
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-ztype':'text/html'
    })
    res.write("Hi I am using default way to create my server");
    res.end();
}).listen(PORT,()=>{console.log("Server running at http://localhost:"+PORT)});