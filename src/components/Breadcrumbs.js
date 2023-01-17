import { Link, NavLink, useLocation } from "react-router-dom"

export const Breadcrumbs = () => {
  const location = useLocation()
  // console.log(location);
  // console.log(location.pathname);
  const breadcrumbsList = location.pathname.split("/").filter(pathname => pathname !== '')
  // console.log('breadcrumbsList', breadcrumbsList)
  let path = ''
  const template = breadcrumbsList.map(crumb => {
    path += `/${crumb}`
    // console.log(path);
    return (
      <li key={crumb}>
        <NavLink
          to={`${path}`}>{crumb}
        </NavLink>
      </li>
    )
  })

  return (

    <ul className="breadcrumb" >
      {template}
      {template.length == 0 ? <li >
        <NavLink
          to={`/`}>home
        </NavLink>
      </li> : ''}
      {/* {breadcrumbsList.map(crumb => (
        
        <li key={crumb}><NavLink to={crumb}>{crumb}</NavLink></li>
      ))} */}
    </ul>

  )
}
