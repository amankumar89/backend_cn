const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  if(req.url === '/first') return res.end('This is first page\n');
  if(req.url === '/second') return res.end('This is second page\n');
  res.write('Welcome to Homepage\n');
  res.end('Aman nodejs server');
});

server.listen(PORT, (err) => {
  if (err) console.error('Error while running server:', err);
  else console.log(`Server is running on port: ${PORT}`);
});