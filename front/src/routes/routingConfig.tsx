import { RouteObject } from 'react-router-dom'
import App from '../App'
import { stockRouterConfig } from '../stock/routes/routingConfig'
import HomeRoute from './HomeRoute'
import LegalRoute from './LegalRoute'
import ErrorRoute from './ErrorRoute'

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorRoute />,
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
