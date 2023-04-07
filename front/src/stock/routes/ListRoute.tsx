import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AsyncButton from '../../widgets/AsyncButton'
import { Article } from '../interfaces/Article'
import { useArticleStore } from '../stores/ArticleStore'
import { listRouteStyle } from './ListRoute.css'

const ListRoute = () => {
  const { articles, remove, refresh } = useArticleStore()

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

  const handleDelete = async () => {
    console.log('delete')
    const ids = [...selectedArticles].map((a) => a.id)
    await remove(ids)
    await refresh()
  }

  const handleRefresh = async () => {
    console.log('refresh')
    await refresh()
  }

  return (
    <main css={listRouteStyle}>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <AsyncButton
            icon={faRotateRight}
            label="Rafraîchir"
            handleClick={handleRefresh}
          />
          <Link to="add" className="button" title="Ajouter">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          {selectedArticles.size > 0 && (
            <AsyncButton
              handleClick={handleDelete}
              icon={faTrashCan}
              label="Supprimer"
            />
          )}
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
