import Router from 'express';

import {getProducts, AddProducts, getProductsById, updateProductsById, deleteProductsById} from '../controller/products.js';

const router = Router();

router.get('/', async (req, res) =>{
    let products = await getProducts();
    products.length > 0 
    ?
    res.status(200).json(products)
    :
    res.status(400).json({message: 'Theres no products'})
;} );

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let product = await getProductsById(id);
    product != null?
    res.status(200).json(product)
    :
    res.status(404).json({message: 'product not found'})
} );

router.post('/', async (req, res) => {
    const productNew = req.body;
    let products = await AddProducts(productNew);
    product != null?
    res.status(201).json(product)
    :
    res.status(400).json({message: 'product could not be loaded'})
} );

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const product = req.body;
    const productNew = {'title': product.title, 'price': product.price, 'thumbnail': product.thumbnail, 'id': id};
    let products = await updateProductsById(productNew);
    product != null?
    res.status(200).json(product)
    :
    res.status(400).json({message: 'product could not be updated'})
} );

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let productId = await deleteProductsById(id);
    productId != null?
    res.status(200).json(productId)
    :
    res.status(400).json({message: 'roduct could not be removed'})
} );

export default router;