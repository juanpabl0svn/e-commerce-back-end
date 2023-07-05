import mongoose from "mongoose";

const username = "admin";
const password = "admin";

const uri = `mongodb+srv://${username}:${password}@e-commerce.oyfnkci.mongodb.net/?retryWrites=true&w=majority`;

const connect = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect"))
    .catch((err) => console.log(err));
};
connect()

export default connect;
