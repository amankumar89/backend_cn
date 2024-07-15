const express = require('express');

const app = express();
const PORT = 3000;

// server with middleware
// app.get('/', (_, __, next) => {
//   console.log('this is middleaware');
//   next();
// })
// app.get('/', (req, res) => {
//   res.send('Hello World from Express server');
// });


// more on middleware
function firstMiddleware(req, res, next) {
  console.log('this is middleware 1');
  next();
}

function secondMiddleware(req, res, next) {
  console.log('this is middleware 2');
  next();
}

function globalMiddleware(req, res, next) {
  console.log('this is global middleware');
  next();
}

app.use(globalMiddleware);

app.get('/send', [firstMiddleware, secondMiddleware], (req, res) => {
  res.send('Hello World from Express server');
});

// app.get('/send', firstMiddleware, secondMiddleware, (req, res) => {
//   res.send('Hello World from Express server');
// });

app.listen(PORT, (error) => {
  if(error) console.log('Error in server setup', error);
    console.log(`Server is running on port: http://localhost:${PORT}`);
});