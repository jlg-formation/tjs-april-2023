import { Link } from 'react-router-dom'

const ErrorRoute = () => {
  return (
    <main>
      <h1>Oups... pas trouvé !</h1>
      <Link to="/">Accueil</Link>
    </main>
  )
}

export default ErrorRoute
