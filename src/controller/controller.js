import productsModel,{usersModel} from "../../database/schema.js";

export async function getProducts(req,res){
    const products = await productsModel.find({})
    console.log(products)
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

export async function createUser(req,res){
    const {body} = req
    const creation =  await usersModel.create(body)
    console.log(creation)
    res.send(creation)
}

export async function getUser(req, res){
    const {body} = req
    const user = await usersModel.findOne(body)
    console.log(user)
    user != null ? res.status(200).json(user) : res.status(204)
}
