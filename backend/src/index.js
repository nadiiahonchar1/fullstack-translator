import express from "express";
import cors from "cors";
import router from "./routes/translate.js";

const app = express();
const corsOptions = {
  origin: 'https://fullstack-translator.netlify.app',
  methods: 'GET',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

app.use('/translate',router);

app.listen(3001, ()=>console.log('Server running'));
