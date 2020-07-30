const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    product_id:{
        type : String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type : String
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;