import express from 'express';
import path from 'path'; 
import expressLayout from 'express-ejs-layouts';

const app = express();
const port = 3400;

app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
app.use(express.static('src/views'));

import ProductsController from './src/controllers/product.controller.js';
const productsController = new ProductsController();

app.get('/', productsController.getProducts);

app.listen(port, (err) => {
  if (err) console.log('Error while running server', err);
  console.log(`Server running at http://localhost:${port}`);
});
