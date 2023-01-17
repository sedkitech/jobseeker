import { useLoaderData, useParams } from "react-router-dom"

export const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className="career-details">
      <h2>Job Details</h2>
      <span>#ref-{id}</span>
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
