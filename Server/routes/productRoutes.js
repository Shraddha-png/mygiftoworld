const express = require('express');
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug }).populate('reviews');
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product Not Found' });
    }
});

productRouter.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = productRouter;
