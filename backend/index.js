import cors from "cors";
import express from "express";
import { calcEffectiveLength } from "./src/model/calcEffectiveLength.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Tee2Chains API");
});

app.get("/calcEffectiveLength", (req, res) => {
  const { length, height } = req.query;
  const result = calcEffectiveLength(length, height);
  res.json({ result });
});

export const tee2chains = app;
