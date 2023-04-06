import { css } from '@emotion/react'

const HomeRoute = () => {
  return (
    <main css={style}>
      <h1>Gérer efficacement votre stock</h1>
      <a href="#" className="button primary">
        Voir le stock
      </a>
    </main>
  )
}

export default HomeRoute

const style = css`
  h1 {
    font-size: 3em;
    text-align: center;
  }
`
