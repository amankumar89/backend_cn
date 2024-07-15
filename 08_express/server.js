const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.send('Hello World from Express server');
});

app.listen(PORT, (error) => {
  if(error) console.log('Error in server setup', error);
    console.log(`Server is running on port: http://localhost:${PORT}`);
});