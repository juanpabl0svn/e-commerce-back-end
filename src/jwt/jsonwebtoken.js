import jwt from "jsonwebtoken";

import { config } from "dotenv";
config();

export default function createJWT(user) {
  return jwt.sign(user, process.env.JWT_SECRET);
}

export function checkJWT(token){
  return jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
    if (err) {
      return null
    }
    return decoded;
  });
}
