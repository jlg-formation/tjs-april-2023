import { Link } from 'react-router-dom'
import style from './FooterLayout.module.scss'

export default function FooterLayout() {
  return (
    <footer className={style.footer}>
      <Link to="/legal">Mentions Légales</Link>
    </footer>
  )
}
