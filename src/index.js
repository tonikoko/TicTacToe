import express from "express";
import dotenv from "dotenv";
import connnectDb from "./utils/connectDb.js";

dotenv.config();

connnectDb();

const app = express();
const port = process.env.port;

app.use(express.json());

app.listen(port, () => {
  console.log(`App started under port ${port}`);
});

app.use(express.static("public"));
