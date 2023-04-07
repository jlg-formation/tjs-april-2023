import { css } from '@emotion/react'
import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleInput } from '../../misc'
import { useArticleStore } from '../stores/ArticleStore'

const AddRoute = () => {
  const [name, setName] = useState('XXX')
  const [price, setPrice] = useState(1)
  const [qty, setQty] = useState(1)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()
  const { add, refresh } = useArticleStore()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault()
      setErrorMsg('')
      setIsSubmitting(true)
      await add({ name, price, qty })
      await refresh()
      navigate('..')
    } catch (err) {
      console.log('err: ', err)
      setErrorMsg('Erreur Technique')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main css={style}>
      <h1>Ajout d'un article</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="error">{errorMsg}</div>
        <button className="primary" disabled={isSubmitting}>
          <FontAwesomeIcon
            icon={isSubmitting ? faCircleNotch : faPlus}
            spin={isSubmitting}
          />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  )
}

export default AddRoute

const style = css``
