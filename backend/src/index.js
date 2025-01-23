import express from "express";
import cors from "cors";
import router from "./routes/translate.js";

const app = express();

app.use(cors());

app.use('/translate',router);

app.listen(3001, ()=>console.log('Server running'));
