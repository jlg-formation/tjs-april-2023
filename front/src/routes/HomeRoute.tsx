import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const HomeRoute = () => {
  return (
    <main css={style}>
      <h1>Gérer efficacement votre stock</h1>
      <Link to="/stock" className="button primary">
        Voir le stock
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
