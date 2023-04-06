import { css } from '@emotion/react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddRoute = () => {
  return (
    <main css={style}>
      <h1>Ajout d'un article</h1>
      <form>
        <label>
          <span>Nom</span>
          <input type="text" />
        </label>
        <label>
          <span>Prix</span>
          <input type="number" />
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" />
        </label>
        <button className="primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  )
}

export default AddRoute

const style = css``
