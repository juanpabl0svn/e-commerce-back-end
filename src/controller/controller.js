import productsModel from "../../database/schema.js";

export async function getProducts(req,res){
    const products = await productsModel.find({})
    res.send(products)
}

export async function getProductById(id){
    const product = await productsModel.findById(id)
    return product
}

export async function getProduct(req,res){
    const {id} = req.params
    const product = await getProductById(id)
    res.json(product)
}
