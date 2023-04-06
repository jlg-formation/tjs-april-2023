import { create } from 'zustand'
import { Article, NewArticle } from '../interfaces/Article'
import { generateId } from '../../misc'

export interface ArticleStore {
  articles: Article[]
  add: (newArticle: NewArticle) => void
  refresh: () => void
}

const myArticles: Article[] = [
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
]

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: myArticles,
  add: (newArticle: NewArticle) => {
    const article = { id: generateId(), ...newArticle }
    myArticles.push(article)
  },
  refresh: () => {
    set(() => ({ articles: myArticles }))
  },
}))
