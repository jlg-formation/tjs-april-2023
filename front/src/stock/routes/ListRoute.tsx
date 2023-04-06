import { css } from '@emotion/react'
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Article } from '../interfaces/Article'

const articles: Article[] = [
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

const ListRoute = () => {
  return (
    <main css={style}>
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
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td className="price">{a.price} €</td>
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

const style = css`
  div.content {
    display: flex;
    flex-flow: column;
    gap: 2em;

    nav {
      display: flex;
      gap: 0.3em;
    }
  }
`
