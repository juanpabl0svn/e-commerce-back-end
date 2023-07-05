import mongoose from "mongoose";

const productScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        units:{
            type: Number
        }
        
    },
    { timestamps: true }
)

const productsModel = new mongoose.model('products',productScheme)



export default productsModel
