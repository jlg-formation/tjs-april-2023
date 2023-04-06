import { RouteObject } from 'react-router-dom'
import AddRoute from './AddRoute'
import ListRoute from './ListRoute'

export const stockRouterConfig: RouteObject[] = [
  {
    path: '',
    element: <ListRoute />,
  },
  {
    path: 'add',
    element: <AddRoute />,
  },
]
