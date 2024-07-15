const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('this is get request');
});

app.post('/', (req, res) => {
  res.status(201).send('this is post request');
});

app.put('/', (req, res) => {
  res.send('this is put request');
});

app.delete('/', (req, res) => {
  res.send('this is delete request');
});

app.listen(PORT, (error) => {
  if(error) console.log('Error in server setup', error);
    console.log(`Server is running on port: http://localhost:${PORT}`);
});