import mongoose from 'mongoose';

let Product;

try {
    Product = mongoose.model('Product');
} catch (error) {
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        price: {
            type: Number,
            required: [true, 'El precio es obligatorio']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },
    });
    Product = mongoose.model('Product', productSchema);
}

export default Product;