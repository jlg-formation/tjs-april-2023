import { listRouteStyle } from './ListRoute.css'
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useArticleStore } from '../stores/ArticleStore'
import { Article } from '../interfaces/Article'
import { useState } from 'react'

const ListRoute = () => {
  const { articles } = useArticleStore()

  const [selectedArticles, setSelectedArticles] = useState(new Set<Article>())

  const handleSelect = (a: Article) => () => {
    console.log('select', a)
    if (selectedArticles.has(a)) {
      selectedArticles.delete(a)
      setSelectedArticles(new Set(selectedArticles))
      return
    }
    selectedArticles.add(a)
    setSelectedArticles(new Set(selectedArticles))
  }

  return (
    <main css={listRouteStyle}>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button title="Rafraîchir">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <Link to="add" className="button" title="Ajouter">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          <button title="Supprimer">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </nav>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr
                key={a.id}
                onClick={handleSelect(a)}
                className={selectedArticles.has(a) ? 'selected' : ''}
              >
                <td className="name">{a.name}</td>
                <td className="price">{a.price.toFixed(2)} €</td>
                <td className="qty">{a.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default ListRoute
