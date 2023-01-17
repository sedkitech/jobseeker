import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: `${base_url}`
})

export const getCareers = async () => {
  const res = await api.get("/careers")
  if (!res.status === 200) {
    throw new Error("Counld not fetch career.")
  }
  return res.data
}



// export const CareersLoader = async () => {
//   const res = await fetch(`${base_url}careers`)
//   if (!res.ok) {
//     throw new Error("Counld not fetch career.")
//   }
//   return res.json()
// }

