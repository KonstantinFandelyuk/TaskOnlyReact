import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "black")};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1;
  overflow-x: hidden;
  background-color: white
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
}

a:hover {
  transition-duration: 0.3s;
}

button {
  border: none;
  outline: none;
  font: inherit;
}

button,
input[type='submit'] {
  cursor: pointer;
}

main {
  margin-bottom: 50px;
}

section {
  margin-bottom: 50px;
}

.wrapper {
  position: relative;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
	box-sizing: border-box;
	@media (max-width: 1110px) {
    padding: 0 15px;}
}
`;
