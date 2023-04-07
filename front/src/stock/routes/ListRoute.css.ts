import { css } from '@emotion/react'

export const listRouteStyle = css`
  div.content {
    display: flex;
    flex-flow: column;
    gap: 2em;

    nav {
      display: flex;
      gap: 0.3em;
    }

    tbody {
      td.qty,
      td.price {
        text-align: right;
      }
    }
  }

  div.loading {
    display: flex;
    gap: 0.5em;
    justify-content: center;
  }
`
