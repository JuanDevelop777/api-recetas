import { Schema, model } from "mongoose";

const recetasModel = new Schema(
  {
    nombre: { type: String, required: true },
    tiempo: { type: Number, required: true },
    ingredientes: { type: [String], required: true },
    origen: { type: String, required: false },
  },
  { versionKey: false, timestamps: true }
);

export default model("Esquema Recetas", recetasModel);
