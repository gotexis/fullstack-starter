// inject this into component
import { css } from "styled-components"

const styles = {
  colors: {
    primary: "#4c4c4c",
    primaryHighlight: "#000000"
  },
  innerWidthLimit: css`
    padding-left: max(1rem, 50vw - 960px / 2);
    padding-right: max(1rem, 50vw - 960px / 2);
  `
}

export default styles
