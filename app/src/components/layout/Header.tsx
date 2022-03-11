import React from "react"
import { Link as BaseLink } from "react-router-dom"
import styled from "styled-components"
import styles from "../../styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to={"/"}>Home</Link>
      <Link to={"/sub"}>Sub</Link>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  ${styles.innerWidthLimit}

  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
`

const Link = styled(BaseLink)`
  color: ${styles.colors.primary};
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: ${styles.colors.primaryHighlight};
  }
`

export default Header
function useMatch(arg0: { path: any; end: boolean }) {
  throw new Error("Function not implemented.")
}
function useResolvedPath(to: any) {
  throw new Error("Function not implemented.")
}
