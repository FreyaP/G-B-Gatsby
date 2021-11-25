import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.png';

const GlobalStyles = createGlobalStyle`
  :root {
  --orange: #eb714a;
  --fontGrey: #334d5e;
  --backgroundGrey: #334d5e;
  --purple: #520841;
  --lightBlue: #407da9;
  --white: white;
  --grey: #E5E5E5;
  --black: #2E2E2E;
  }
  html {
    font-size: 10px;
    //background-image: url(${bg});
    background-size: 100vw;
    background-attachment: fixed;
  }
body {
    font-size: 2rem;
}

 

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
//Update***********
  button {
    background: var(--orange);
    border: none;
    cursor: pointer;
    color: var(--white);
    border-radius: 3px;
    
    
  }
  }
//select img before loaded
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

export default GlobalStyles;