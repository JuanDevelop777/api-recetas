import express from "express";
import "dotenv/config";
import "./config.js";
import recetasRouter from "../routers/recetasRouter.js";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hi from the root");
});

//middlewares o routes

app.use(express.json());

app.use("/recetas", recetasRouter);

// url server
app.listen(port, () => {
  console.log(`server encedido: ${port}`);
});
