import mongoose from "mongoose";

const productScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    units: {
      type: Number,
    },
    description: {
      type: String,
    },
    comments: {
      type: Array,
    },
    ranking: {
      type: Array,
    }
  },
  { timestamps: true, versionKey: false }
);

const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const productsModel = new mongoose.model("products", productScheme);
export const usersModel = new mongoose.model("users", userScheme);

export default productsModel;
