import { create } from 'zustand'
import { Article } from '../interfaces/Article'

export interface ArticleStore {
  articles: Article[]
}

export const useArticleStore = create<ArticleStore>(() => ({
  articles: [
    {
      id: 'a1',
      name: 'Tournevis',
      price: 12.23,
      qty: 120,
    },
    {
      id: 'a2',
      name: 'Pelle',
      price: 50,
      qty: 6,
    },
  ],
}))
