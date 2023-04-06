import { css } from '@emotion/react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const HomeRoute = () => {
  return (
    <main css={style}>
      <h1>Gérer efficacement votre stock</h1>
      <Link to="/stock" className="button primary">
        <span>Voir le stock</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </main>
  )
}

export default HomeRoute

const style = css`
  flex: 0;
  h1 {
    font-size: 3em;
    text-align: center;
  }
`
