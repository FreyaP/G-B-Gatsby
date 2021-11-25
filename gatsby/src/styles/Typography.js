import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  
  html {
    font-family: 'Lato', sans-serif;
    color: var(--fontGrey);
  }
  p, li {
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }
 
  a {
    color: var(--fontGrey);
    text-decoration-color: var(--orange);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    text-transform: uppercase;
    font-weight: bold;
  }
  mark, .mark {
    background: var(--backgroundGrey);
    padding: 0 8px 8px 8px;
    margin: 0;
    display: inline;
    line-height: 1;
    
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
