import { Article, NewArticle } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async add(newArticle: NewArticle) {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newArticle),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async remove(ids: string[]) {
    await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(ids),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async retrieveAll(): Promise<Article[]> {
    console.log('retrieve all')

    const response = await fetch(url)
    const articles: Article[] = await response.json()
    return articles
  }
}

export const api = new API()
