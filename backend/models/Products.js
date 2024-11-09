import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,  // Store the path or URL to the image
    },
    availability: {
        type: Boolean,
        default: true,
    },
    link: {
        type: String,
        required: true,  // Link to the brand’s website
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
