import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.send ("Hi Everyone");
});
app.listen(PORT, () => console.log("Server is running"));
