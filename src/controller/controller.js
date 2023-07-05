import productsModel from "../../database/schema.js";

export async function getProducts(req,res){
    const products = await productsModel.find({})
    res.send(products)
}

export async function getProduct({id}){
    const product = await productsModel.findById(id)
    return product
}
export function buyProducts(req,res){
    const {elements} = req.body

    elements.forEach(async(elements) => {
        const unitsAsked = el
        const unitsAvailable = getProduct(el)
        if (units){}
        const document = await productsModel.findOneAndUpdate()

    })
}