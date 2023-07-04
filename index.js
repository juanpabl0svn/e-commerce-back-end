import * as url from "url";
import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public","images"))
})

app.listen(PORT, console.log(`Listening on port ${PORT}`));
