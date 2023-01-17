const base_url = process.env.REACT_APP_BASE_URL;

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch(`${base_url}careers/${id}`)
  if (!res.ok) {
    throw new Error("Could not fetch career details.")
  }
  return res.json()

}
