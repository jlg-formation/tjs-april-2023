import { Article } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async retrieveAll(): Promise<Article[]> {
    const response = await fetch(url)
    const articles: Article[] = await response.json()
    return articles
  }
}

export const api = new API()
