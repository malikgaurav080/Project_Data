import http from 'http';

// const server = http.createServer()

// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.end("This is MY First Server")
//   });

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!'
    }));
  });

const serverr = http.createServer((req, res) => {
// res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({
    data: 'Hello World!'
}));
});


server.listen(3000,()=>{
    console.log("server is running on PORT 3000")
})

serverr.listen(3001,()=>{
    console.log("server is running on PORT 3001")
})