import { RouteObject } from 'react-router-dom'
import App from '../App'
import { stockRouterConfig } from '../stock/routes/routingConfig'
import HomeRoute from './HomeRoute'
import LegalRoute from './LegalRoute'

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomeRoute />,
      },
      {
        path: 'legal',
        element: <LegalRoute />,
      },
      {
        path: 'stock',
        children: stockRouterConfig,
      },
    ],
  },
]
