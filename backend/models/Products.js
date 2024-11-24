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
    colors: {
        type: [String],  
        required: true,
    },
    sizes: {
        type: [String],  
        required: true,
    },
    primary_color: {
        type: String,
        required: true,
    },
    redirect_link: {
        type: String,
        required: true,  
    },
    type: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    images: {
        type: [Buffer],  
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
