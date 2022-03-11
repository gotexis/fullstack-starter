import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Routes, Route } from "react-router"
import Main from "./pages/main"
import Sub from "./pages/sub"
import Header from "./components/layout/Header"

import "./index.scss"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
