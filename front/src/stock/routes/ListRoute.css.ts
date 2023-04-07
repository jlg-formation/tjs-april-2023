import { css } from '@emotion/react'

export const listRouteStyle = css`
  div.content {
    display: flex;
    flex-flow: column;

    nav {
      display: flex;
      gap: 0.3em;
    }

    div.error {
      height: 2em;
      display: flex;
      align-items: center;
      font-weight: bold;
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
