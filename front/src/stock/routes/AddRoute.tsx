import { css } from '@emotion/react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { handleInput } from '../../misc'

const AddRoute = () => {
  const [name, setName] = useState('XXX')
  const [price, setPrice] = useState(1)
  const [qty, setQty] = useState(1)

  return (
    <main css={style}>
      <h1>Ajout d'un article</h1>
      <form>
        <label>
          <span>Nom</span>
          <input type="text" value={name} onChange={handleInput(setName)} />
        </label>
        <label>
          <span>Prix</span>
          <input
            type="number"
            value={price}
            onChange={handleInput(setPrice, 'number')}
          />
        </label>
        <label>
          <span>Quantité</span>
          <input
            type="number"
            value={qty}
            onChange={handleInput(setQty, 'number')}
          />
        </label>
        <button className="primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
      <div>{name}</div>
      <div>{price}</div>
    </main>
  )
}

export default AddRoute

const style = css``
