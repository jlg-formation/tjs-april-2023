import { RouteObject } from 'react-router-dom'
import HomeRoute from './HomeRoute'
import LegalRoute from './LegalRoute'
import App from '../App'

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
    ],
  },
]
