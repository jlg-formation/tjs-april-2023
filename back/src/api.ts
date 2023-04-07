import express, { json } from "express";
import { Article, NewArticle } from "./interfaces/Article";

const generateId = () => {
  return Date.now() + "_" + (Math.random() * 1e12).toFixed(0);
};

let articles: Article[] = [
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

app.use(json());

app.post("/articles", (req, res) => {
  const newArticles: NewArticle = req.body;
  const article: Article = { id: generateId(), ...newArticles };
  articles.push(article);
  res.status(201).end();
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
