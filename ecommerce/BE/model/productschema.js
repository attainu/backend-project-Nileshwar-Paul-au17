import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({ //in this schema we defined all the attributes of the product
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const products = mongoose.model('product', productSchema); // //creating the product schema in the database
export default products;