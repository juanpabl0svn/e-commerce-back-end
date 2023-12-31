import * as url from "url";
import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import "../database/root.js";
import router from "./routes/router.js";
import bodyParser from "body-parser";

export const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json())  
app.use(express.json())
app.use(router);
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "images"));
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
