const http = require('http');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(body);
      res.end('Data received');
    });
  } else res.end('Welcome to Aman nodejs server');
});

const port = 8080;
server.listen(port, (err) => {
  if (err) {
    console.error('Error while running server:', err);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
