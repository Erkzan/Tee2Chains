import cors from "cors";
import { calcEffectiveLength } from "./model/calcEffectiveLength.js";
import { calcHoleLength } from "./model/calcLength.js";

import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.get("/calcHoleLength", (req, res) => {
  const { length, height } = req.query;
  const result = calcHoleLength(length, height);
  res.json({ result });
});

app.get("/calcEffectiveLength", (req, res) => {
  const { length, height } = req.query;
  const result = calcEffectiveLength(length, height);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
