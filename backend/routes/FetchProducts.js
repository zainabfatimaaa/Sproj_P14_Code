import express from 'express';
import Product from '../models/Products.js';  
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); 
        res.json(products); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' }); 
    }
});




// New route to fetch a product by its ID
router.get('/:id', async (req, res) => {
    try {
        console.log("id", req.params)
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
});

export default router;
