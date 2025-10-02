const http=require('http');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.write('Home Page');
    res.end();
  }
  
})

server.listen(5000)