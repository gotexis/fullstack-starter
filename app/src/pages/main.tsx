import React from "react"
import Box from "../components/Box"
import axios from "axios"
import { useQuery } from "react-query"

const Main = () => {
  const { data, isLoading, isError } = useQuery(
    "data",
    async () => (await axios.get("http://localhost:4000/ping/")).data
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error :(</p>

  return (
    <div>
      <Box>main</Box>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default Main
