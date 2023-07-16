import productsModel, { usersModel } from "../../database/schema.js";
import createJWT from "../jwt/jsonwebtoken.js";

export async function getProducts(req, res) {
  const products = await productsModel.find({});
  return res.send(products);
}

export async function getProductById(id) {
  const product = await productsModel.findById(id);
  return product;
}

export async function getProduct(req, res) {
  const { id } = req.params;
  const product = await getProductById(id);
  return res.json(product);
}

export async function createUser(req, res) {
  const { body } = req;
  try {
    await usersModel.create(body);
    return res.status(200).send("Created successfully");
  } catch (err) {
    return res.status(403).send("Error creating user");
  }
}

export async function getUser(req, res) {
  const { username,password } = req.body;
  const user = await usersModel.findOne({username,password});

  if (user != null) {
    const token = createJWT({ username });
    return res.status(200).json({
      username,
      token,
    });
  }
  return res.status(403).json({ error: "Something wrong" });
}

export function checkJWT(req,res){
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    return res.status(200).json(decoded);
  });
}



// export async function createDataBase(req, res) {
//   const request = await fetch("http://localhost:3000/db.json");

//   const response = await request.json();

//   const insertion = await productsModel.insertMany(response);

//   res.send(insertion);
// }
