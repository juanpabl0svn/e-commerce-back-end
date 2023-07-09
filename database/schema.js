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
    { timestamps: true,
        versionKey: false
     }
)

const userScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        surname: {
            type: String
        },
        birthdate: {
            type: Date
        },
        email:{
            type:String
        },
        username:{
            type: String
        },
        password:{
            type:String
        }
        
    },
    { timestamps: false,versionKey:false },
)



const productsModel = new mongoose.model('products',productScheme)
export const usersModel = new mongoose.model('users',userScheme)



export default productsModel
