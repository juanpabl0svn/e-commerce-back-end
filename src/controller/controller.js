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

export async function getUserData({ username, password }) {
  return await usersModel.find({ username, password });
}

export async function userExists(username) {
  return await usersModel.findOne({ username });
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
  const { username } = req.body;
  const user = await getUserData(req.body);

  if (user != null) {
    const token = createJWT({ username });
    return res.status(200).json({
      username,
      token,
    });
  }
  return res.status(403).json({ error: "Something wrong" });
}

export async function logIn(req, res) {
  const { token, username } = req.headers;
  const check = createJWT(token);
  if (check != null) {
      const exist = await userExists(username);

      if (exist){
        return res.status(200).json({username,token})
      }

      res.status(404)
  }
}

export async function createComment(req, res) {
  const { username, _id, message } = req.body;

  const data = await productsModel.updateOne(
    { _id },
    {
      $push: {
        comments: {
          username,
          message,
        },
      },
    }
  );
  res.json({username,message});
}

export async function createDatabase(req, res) {
  const request = await fetch("http://localhost:3000/db.json");
  const response = await request.json();
  console.log(response);

  const data = await productsModel.insertMany(response);

  res.send(data);
}

// export async function createDataBase(req, res) {
//   const request = await fetch("http://localhost:3000/db.json");

//   const response = await request.json();

//   const insertion = await productsModel.insertMany(response);

//   res.send(insertion);
// }
