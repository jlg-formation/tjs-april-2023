import { create } from 'zustand'
import { api } from '../api'
import { Article, NewArticle } from '../interfaces/Article'

export interface ArticleStore {
  articles: Article[]
  add: (newArticle: NewArticle) => Promise<void>
  refresh: () => Promise<void>
  remove: (ids: string[]) => Promise<void>
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  add: async (newArticle: NewArticle) => {
    await api.add(newArticle)
  },
  refresh: async () => {
    const articles = await api.retrieveAll()
    set(() => ({ articles: articles }))
  },
  remove: async (ids) => {
    await api.remove(ids)
  },
}))
