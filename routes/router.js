import Router from 'express';

import {getProducts, AddProducts, getProductsById, updateProductsById, deleteProductsById} from '../controller/products.js';

const router = Router();

router.get('/', async (req, res) => {
    let products = await getProducts();
    res.send(products);
} );

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let product = await getProductsById(id);
    res.send(product);
} );

router.post('/', async (req, res) => {
    const productNew = req.body;
    let products = await AddProducts(productNew);
    res.send(products);
} );

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const product = req.body;
    const productNew = {'title': product.title, 'price': product.price, 'thumbnail': product.thumbnail, 'id': id};
    let products = await updateProductsById(productNew);
    res.send(products);
} );

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let productId = await deleteProductsById(id);
    res.send(productId);
} );

export default router;