const express = require('express');
const CategoryController = require('./controllers/CategoryController');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//3. Rotas
routes.get("/products", ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products/:id', ProductController.update);
routes.post("/products", ProductController.store);
routes.delete("/products/:id", ProductController.destroy);

//category routes:
routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);

module.exports = routes;