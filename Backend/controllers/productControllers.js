const Product = require('../models/products');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//add new product
const addProduct = async (req, res) => {
    try {
        const { productName, productPrice, barcode, imageUri, description, productStock } = req.body;

        // Check if the product with the same barcode already exists
        const existingProduct = await Product.findOne({ barcode });
        if (existingProduct) {
            return res.status(400).json({ message: 'Product with this barcode already exists' });
        }

        // Create a new product
        const newProduct = new Product({
            productName,
            productPrice,
            barcode,
            imageUri,
            description,
            productStock
        });        

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Edit a product
const editProduct = async (req, res) => {
    try {
        const { productId, productName, barcode, productPrice, productStock, description, imageUri } = req.body;

        // Find the product by its ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product details
        if (productName) product.productName = productName;
        if (barcode) product.barcode = barcode;
        if (productPrice) product.productPrice = productPrice;
        if (productStock) product.productStock = productStock;
        if (description) product.description = description;
        if (imageUri) product.imageUri = imageUri;

        await product.save();

        res.json({ message: 'Product updated successfully', updatedProduct: product });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        // Find the product by ID and delete it
        const result = await Product.deleteOne({ _id: productId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//barcode validate
const validateBarcodeAndGetProduct = async (req, res) => {
    try {
        const barcode = req.params.barcode;

        // Find the product by barcode
        const product = await Product.findOne({ barcode: barcode });

        if (!product) {
            return res.status(404).json({ message: 'Product not found for the given barcode' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



module.exports = {
    getAllProducts, addProduct, editProduct, deleteProduct, validateBarcodeAndGetProduct
};

