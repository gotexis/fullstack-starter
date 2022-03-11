import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Switch, Route } from "react-router"
import Main from "./pages/main"
import Sub from "./pages/sub"

import "./index.scss"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sub" component={Sub} />
      </Switch>
    </QueryClientProvider>
  )
}

export default App
