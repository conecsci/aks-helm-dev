const http=require('http');
const PORT=3000;
http.createServer((req,res)=>{res.end('DEV:Hello This is a trainng Session')}).listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});