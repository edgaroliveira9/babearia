import { createGlobalStyle } from 'styled-components';

// Paleta inspirada em barbearia clássica: madeira escura, couro e dourado,
// como um quadro de preços pendurado na parede.
export const theme = {
  bg: '#1E1B16',
  bgPanel: '#171410',
  text: '#F2E9D8',
  textMuted: '#B8AC97',
  gold: '#C9A227',
  red: '#8C2F2F',
  hairline: 'rgba(242, 233, 216, 0.16)',
};

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background: ${theme.bg};
    color: ${theme.text};
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
  }

  :focus-visible {
    outline: 2px solid ${theme.gold};
    outline-offset: 2px;
  }
`;

export default GlobalStyle;
