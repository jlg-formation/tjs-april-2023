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

let myArticles: Article[] = []

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: myArticles,
  add: async (newArticle: NewArticle) => {
    await api.add(newArticle)
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
