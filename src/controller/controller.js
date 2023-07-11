import productsModel, { usersModel } from "../../database/schema.js";

export async function getProducts(req, res) {
  const products = await productsModel.find({});
  res.send(products);
}

export async function getProductById(id) {
  const product = await productsModel.findById(id);
  return product;
}

export async function getProduct(req, res) {
  const { id } = req.params;
  const product = await getProductById(id);
  res.json(product);
}

export async function createUser(req, res) {
  const { body } = req;
  try {
    const creation = await usersModel.create(body);
    res.status(200).send("Created successfully");
  } catch (err) {
    res.status(403).send("Error creating user");
  }
}

export async function getUser(req, res) {
  const { body } = req;
  const user = await usersModel.findOne(body);
  console.log(user);
  user != null
    ? res.status(200).json(user)
    : res.status(403).json({ error: "Something wrong" });
}
