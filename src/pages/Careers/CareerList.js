import { Link, useLoaderData } from "react-router-dom"

export const CareerList = ({ careers }) => {
  return (
    <div className="careers">
      {careers.map(career => (
        <Link key={career.id} to={career.id.toString()} >
          <p>{career.title}</p>
          <span>Location: {career.location}</span>
        </Link>
      ))}
    </div>
  )
}
