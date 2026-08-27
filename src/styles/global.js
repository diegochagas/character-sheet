import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face{
    font-family: Milford Condensed;
    src: url('/fonts/milford-condensed/milford-condensed.eot'),
      url('/fonts/milford-condensed/milford-condensed.woff') format('woff'),
      url('/fonts/milford-condensed/milford-condensed.ttf') format('truetype'),
      url('/fonts/milford-condensed/milford-condensed.svg') format('svg');
    font-style: normal;
  }

  @font-face{
    font-family: Milford Condensed Bold;
    src: url('/fonts/milford-condensed/milford-condensed-bold.eot'),
      url('/fonts/milford-condensed/milford-condensed-bold.woff') format('woff'),
      url('/fonts/milford-condensed/milford-condensed-bold.ttf') format('truetype'),
      url('/fonts/milford-condensed/milford-condensed-bold.svg') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Microgrammad Bold Extented;
    src: url('/fonts/microgrammad-bold-extented/microgrammad-bold-extented.eot'),
      url('/fonts/microgrammad-bold-extented/microgrammad-bold-extented.woff') format('woff'),
      url('/fonts/microgrammad-bold-extented/microgrammad-bold-extented.ttf') format('truetype'),
      url('/fonts/microgrammad-bold-extented/microgrammad-bold-extented.svg') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  body{
    font-family: Milford Condensed !important;
  }

  h1, h2 {
    font-family: Microgrammad Bold Extented;
    text-align: center;
    text-transform: capitalize;
  }

  h3, h4, h5,
  button, a {
    font-weight: bold !important;
  }

  hr{
    border: none;
    display: table;
    margin: 0 auto;
  }

  hr:before {
    content: "••••••••••";
    letter-spacing: 12px;
    font-size: 60px;
  }

  .container-ficha {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .ficha {
    border:  5px dashed #000;
    padding: 15px;
  }
`;
