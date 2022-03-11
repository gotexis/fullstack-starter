import React from "react"
import styled from "styled-components"
import { Component } from "react"
import styles from "../styles"

const Box = ({ children }: { children: Component | any }) => <Root>{children}</Root>

const Root = styled.div`
  ${styles.innerWidthLimit}
`

export default Box
