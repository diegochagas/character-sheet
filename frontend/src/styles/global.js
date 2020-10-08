import { createGlobalStyle } from 'styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import MilfordCondensedEOT from '../assets/fonts/milford-condensed/milford-condensed.eot';
import MilfordCondensedWOFF from '../assets/fonts/milford-condensed/milford-condensed.woff';
import MilfordCondensedTTF from '../assets/fonts/milford-condensed/milford-condensed.ttf';
import MilfordCondensedSVG from '../assets/fonts/milford-condensed/milford-condensed.svg';

import MilfordCondensedBoldEOT from '../assets/fonts/milford-condensed/milford-condensed-bold.eot';
import MilfordCondensedBoldWOFF from '../assets/fonts/milford-condensed/milford-condensed-bold.woff';
import MilfordCondensedBoldTTF from '../assets/fonts/milford-condensed/milford-condensed-bold.ttf';
import MilfordCondensedBoldSVG from '../assets/fonts/milford-condensed/milford-condensed-bold.svg';

import MicrogrammadBoldExtentedEOT from '../assets/fonts/microgrammad-bold-extented/microgrammad-bold-extented.eot';
import MicrogrammadBoldExtentedWOFF from '../assets/fonts/microgrammad-bold-extented/microgrammad-bold-extented.woff';
import MicrogrammadBoldExtentedTTF from '../assets/fonts/microgrammad-bold-extented/microgrammad-bold-extented.ttf';
import MicrogrammadBoldExtentedSVG from '../assets/fonts/microgrammad-bold-extented/microgrammad-bold-extented.svg';

export default createGlobalStyle`
  @font-face{
    font-family: Milford Condensed;
    src: url(${MilfordCondensedEOT}),
      url(${MilfordCondensedWOFF}) format('woff'),
      url(${MilfordCondensedTTF}) format('truetype'),
      url(${MilfordCondensedSVG}) format('svg');
    font-style: normal;
  }

  @font-face{
    font-family: Milford Condensed Bold;
    src: url(${MilfordCondensedBoldEOT}),
      url(${MilfordCondensedBoldWOFF}) format('woff'),
      url(${MilfordCondensedBoldTTF}) format('truetype'),
      url(${MilfordCondensedBoldSVG}) format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Microgrammad Bold Extented;
    src: url(${MicrogrammadBoldExtentedEOT}),
      url(${MicrogrammadBoldExtentedWOFF}) format('woff'),
      url(${MicrogrammadBoldExtentedTTF}) format('truetype'),
      url(${MicrogrammadBoldExtentedSVG}) format('svg');
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
