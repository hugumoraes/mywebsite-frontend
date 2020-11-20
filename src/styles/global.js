import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
	padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}

html, body, #root {
  min-height: 100%;
  line-height: 1;
}

body {
  background: #DFDFDF;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: black;
  font-size: 14px;
  font-family: 'Crimson Text', Arial, Helvetica, sans-serif;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  cursor: pointer;
}

a {
    text-decoration: none;
    
}

:root {
  --primary-white: #f0f0f0;
  --primary-grey: grey;
  --primary-black: #0e0e0e;
  --secondary-black: #292626;
}
`;
