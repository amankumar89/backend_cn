import ProductModel from '../models/product.model.js';
// import path from 'path'

export default class ProductsController {
  getProducts(req, res) {
    const productsData = ProductModel.get();
    return res.render('products', { products: productsData });
    // const filePath = path.join(path.resolve(), 'src', 'views' , 'products.html');
    // return res.sendFile(filePath);
  }
}