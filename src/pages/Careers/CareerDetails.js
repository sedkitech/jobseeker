import { useLoaderData, useParams } from "react-router-dom"
import { formatDistance } from 'date-fns'
export const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()

  const timeDistance = formatDistance(new Date(career.timestamp), Date.now(), {
    addSuffix: true
  })
  return (
    <div className="career-details">
      <h2>Job Details</h2>
      <span>posted {timeDistance}</span>
      <p>Job title: {career.title}</p>
      <p>Location: {career.location}</p>
      <p>Salary: {career.salary}</p>
      <section>
        <h5>Description</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, maiores.</p>
      </section>


    </div>
  )
}
