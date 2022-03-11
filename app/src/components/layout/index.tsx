import React from "react"
import Header from "./Header"

const Layout = ({ children }: { children: React.ReactChildren }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
