import { Link } from 'react-router-dom'
import './HeaderLayout.scss'

export default function HeaderLayout() {
  return (
    <header>
      <Link to="/">
        <img src="/logo.svg" alt="Logo" />
        <span>Gestion Stock</span>
      </Link>
    </header>
  )
}
