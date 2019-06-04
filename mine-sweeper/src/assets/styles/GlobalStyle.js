import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   body {
      margin: 0;
      padding: 0;
   }

   html{
      font-size: 62.5%;
   }

   *, *::before, *::after {
      box-sizing: border-box;
   }
`;

export default GlobalStyle;
