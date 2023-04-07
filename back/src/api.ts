import express from "express";
import { Article } from "./interfaces/Article";

const articles: Article[] = [
  {
    id: "a1",
    name: "Tournevis",
    price: 12.23,
    qty: 120,
  },
  {
    id: "a2",
    name: "Marteau",
    price: 50,
    qty: 6,
  },
];

const app = express.Router();

app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
