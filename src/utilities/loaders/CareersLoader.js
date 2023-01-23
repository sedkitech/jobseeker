import axios from "axios";
// import { useQuery } from '@tanstack/react-query'
const base_url = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: `${base_url}`
})

export const getCareers = async () => {
  const res = await api.get("/careers")
  if (!res.status === 200) {
    throw new Error("Counld not fetch career.")
  }
  // console.log("res", res)

  return res.data
}

// ⬇️ define your query
export const careersQuery = () => ({
  queryKey: ['careers'],
  queryFn: async () => getCareers(),
})

// ⬇️ needs access to queryClient
export const careersLoader =
  (queryClient) =>
    async () => {
      const query = careersQuery()
      // ⬇️ return data or fetch it
      console.log(query)
      console.log(query.queryKey)

      return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
      )
    }

// export default function Contact() {
//   // ⬇️ useQuery as per usual
//   const { data: careers } = useQuery(careersQuery())
//   // render some jsx
// }

















export const addCareer = async (career) => {
  return await api.post("/careers", career)
}

export const updateCareer = async (career) => {
  return await api.patch(`/careers/${career.id}`, career)
}

export const deleteCareer = async ({ id }) => {
  return await api.delete(`/careers/${id}`, id)
}

// export const CareersLoader = async () => {
//   const res = await fetch(`${base_url}careers`)
//   if (!res.ok) {
//     throw new Error("Counld not fetch career.")
//   }
//   return res.json()
// }

