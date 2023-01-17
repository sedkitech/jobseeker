import { Link, useRouteError } from "react-router-dom"

export const RouteError = () => {
  const error = useRouteError()
  return (
    <div className="route-error">
      <h1>Oops!</h1>
      <h3>{error.message}</h3>
      <p>Back to <Link to='/'>home page</Link>.</p>
    </div>
  )
}
