import styled from 'styled-components';

export const Container = styled.div`
  @font-face {
    font-family: Milford Condensed;
    src: url('../assets/fonts/milford-condensed/milford-condensed.eot'),
      url('../assets/fonts/milford-condensed/milford-condensed.woff')
        format('woff'),
      url('../assets/fonts/milford-condensed/milford-condensed.ttf')
        format('truetype'),
      url('../assets/fonts/milford-condensed/milford-condensed.svg')
        format('svg');
    font-style: normal;
  }

  @font-face {
    font-family: Milford Condensed Bold;
    src: url('../assets/fonts/milford-condensed/milford-condensed-bold.eot'),
      url('../assets/fonts/milford-condensed/milford-condensed-bold.woff')
        format('woff'),
      url('../assets/fonts/milford-condensed/milford-condensed-bold.ttf')
        format('truetype'),
      url('../assets/fonts/milford-condensed/milford-condensed-bold.svg')
        format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Microgrammad Bold Extented;
    src: url('../assets/fonts/microgrammad-bold extented.eot'),
      url('../assets/fonts/microgrammad-bold extented.woff') format('woff'),
      url('../assets/fonts/microgrammad-bold extented.ttf') format('truetype'),
      url('../assets/fonts/microgrammad-bold extented.svg') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: Milford Condensed;
  }

  h1,
  h2 {
    font-family: Microgrammad Bold Extented;
    text-align: center;
    text-transform: capitalize;
  }

  h3,
  h4,
  h5,
  button,
  a {
    font-weight: bold !important;
  }

  hr {
    border: none;
    display: table;
    margin: 0 auto;
  }

  hr:before {
    content: '••••••••••';
    letter-spacing: 12px;
    font-size: 60px;
  }

  header {
    /*background-image: url("../images/background1.jpg");*/
    background-repeat: no-repeat;
    background-position: 78%;
    height: 330px;
  }

  header nav.navbar {
    position: fixed;
    width: 100%;
    top: 0;
  }

  .horizontal-collapse {
    height: 70px;
  }
  .navbar-collapse.in {
    overflow-y: hidden;
  }

  header .navbar {
    opacity: 0.9;
    z-index: 10;
  }

  header .navbar-toggle {
    padding: 3px 5px 1px 5px;
  }

  header .navbar-nav {
    margin-top: 6px;
    font-weight: bold;
  }

  .navbar-default .navbar-nav > li > a {
    color: #fff;
    font-size: 17px;
  }

  .navbar .glyphicon-menu-hamburger:before {
    color: #fff;
    font-size: 35px;
    text-shadow: -1px -1px 0 #122b46, 1px -1px 0 #122b46, -1px 1px 0 #122b46,
      1px 1px 0 #122b46;
  }

  .navbar .navbar-header,
  .navbar .navbar-collapse {
    background-color: #122b46;
  }

  .navbar-brand {
    height: 61px;
    padding: 5px;
  }

  .navbar-brand > img {
    max-height: 100%;
  }

  .navbar-brand > span {
    position: absolute;
    top: 17px;
    left: 70px;
    width: 170px;
    color: #fff;
    font-family: Microgrammad Bold Extented;
    font-size: 13px;
    line-height: 14px;
    text-shadow: -1px -1px 0 #122b46, 1px -1px 0 #122b46, -1px 1px 0 #122b46,
      1px 1px 0 #122b46;
  }

  section.o-que-e,
  section.outras-publicacoes,
  section.adaptacoes,
  section.detalhes,
  section.publicacoes,
  section.error {
    background-color: #0d4b88;
  }

  section.o-que-e h1,
  section.outras-publicacoes h2,
  section.adaptacoes h1,
  section.detalhes h2,
  section.publicacoes h1,
  section.contato h1,
  section.historia h1,
  section.error h1,
  section.login h1 {
    color: #fff;
    text-shadow: -1px -1px 0 #122b46, 1px -1px 0 #122b46, -1px 1px 0 #122b46,
      1px 1px 0 #122b46;
  }

  section.o-que-e p,
  section.adaptacoes p,
  section.publicacoes p,
  section.contato,
  section.error p {
    color: #fff;
    text-align: center;
    font-size: 16px;
  }

  section.compre-agora img {
    margin: 0 auto;
    border: 5px solid #000;
  }

  section.compre-agora a {
    background: #0d4b88;
    max-width: 200px;
    margin: 10px auto;
    text-transform: uppercase;
  }

  section.outras-publicacoes .carousel {
    padding: 0 15px;
    min-height: 370px;
  }

  section.outras-publicacoes img {
    margin: 0 auto;
    border: 5px solid #122b46;
    max-height: 400px;
  }

  section.outras-publicacoes .carousel-caption {
    position: relative;
    right: inherit;
    left: inherit;
  }

  section.outras-publicacoes .carousel-indicators {
    display: none;
  }

  section.outras-publicacoes .carousel-control {
    background: none;
  }

  section.outras-publicacoes .carousel-control span {
    background-color: #fff;
    color: #122b46;
    border: 5px solid #122b46;
    padding: 3px 3px 5px 3px;
  }

  @media screen and (min-width: 768px) {
    section.outras-publicacoes .carousel-control span {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 767px) {
    section.outras-publicacoes .carousel-control span.glyphicon-chevron-left {
      left: 15px;
      top: 40%;
    }

    section.outras-publicacoes .carousel-control span.glyphicon-chevron-right {
      right: 15px;
      top: 40%;
    }
  }

  footer {
    background-color: #122b46;
    height: 50px;
    padding: 5px;
  }

  footer .logo-site {
    float: left;
  }

  footer .logo-site img {
    height: 40px;
  }

  footer a {
    color: #fff;
    float: right;
    font-family: Microgrammad Bold Extented;
    font-size: 10px;
  }

  footer a span {
    display: block;
    text-align: right;
  }

  footer .nome {
    font-size: 20px;
  }
`;
