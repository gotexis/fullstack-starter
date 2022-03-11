import React from "react"
import Box from "../components/Box"
import axios from "axios"
import { useQuery } from "react-query"
import { Section } from "../components/ui"

const Main = () => {
  const { data, isLoading, isError } = useQuery(
    "data",
    async () => (await axios.get("http://localhost:4000/ping/")).data
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error :(</p>

  return (
    <>
      <Section>
        <Box>
          <div>Homepage</div>
        </Box>
      </Section>

      <Section>
        <Box>
          <div>Data section</div>
          <div>{JSON.stringify(data)}</div>
        </Box>
      </Section>
    </>
  )
}

export default Main
