const base_url = process.env.REACT_APP_BASE_URL;
export const CareersLoader = async () => {
  const res = await fetch(`${base_url}careers`)
  if (!res.ok) {
    throw new Error("Counld not fetch career.")
  }
  return res.json()
}
