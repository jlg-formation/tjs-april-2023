import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const ListRoute = () => {
  return (
    <main css={style}>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button>Rafraîchir</button>
          <Link to="add" className="button">
            Ajouter
          </Link>
          <button>Supprimer</button>
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
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">2.30 €</td>
              <td className="qty">110</td>
            </tr>
            <tr>
              <td className="name">Marteau</td>
              <td className="price">5.00 €</td>
              <td className="qty">23</td>
            </tr>
            <tr>
              <td className="name">Serpe</td>
              <td className="price">8.00 €</td>
              <td className="qty">8</td>
            </tr>
            <tr>
              <td className="name">Perceuse</td>
              <td className="price">45.50 €</td>
              <td className="qty">10</td>
            </tr>
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
