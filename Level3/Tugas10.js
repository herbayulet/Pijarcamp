import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// ini file controller
// import * as produkRoute from "./routes/produkRoute.js";

// const produkRoute = require("./routes/produkRoute.js");
const app = express();
mongoose.connect("mongodb://localhost:27017/pijarcamp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error ga nyambung", (error) => console.log(error));
db.once("open", () => console.log("Database tersambung"));

app.use(cors());
app.use(express.json());
// ini error nya
// app.use(produkRoute);

app.listen(5000, () => console.log("Alhamdulilah berjalan..."));
