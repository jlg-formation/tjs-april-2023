import { create } from 'zustand'
import { Article, NewArticle } from '../interfaces/Article'
import { generateId, sleep } from '../../misc'
import { api } from '../api'

export interface ArticleStore {
  articles: Article[]
  add: (newArticle: NewArticle) => Promise<void>
  refresh: () => Promise<void>
  remove: (ids: string[]) => Promise<void>
}

let myArticles: Article[] = [
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
  add: async (newArticle: NewArticle) => {
    await sleep(2000)
    const article = { id: generateId(), ...newArticle }
    myArticles.push(article)
  },
  refresh: async () => {
    const articles = await api.retrieveAll()
    set(() => ({ articles: articles }))
  },
  remove: async (ids) => {
    await sleep(1000)
    myArticles = myArticles.filter((a) => !ids.includes(a.id))
  },
}))
