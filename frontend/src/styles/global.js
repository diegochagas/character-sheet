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

  header{
    /*background-image: url("../images/background1.jpg");*/
    background-repeat: no-repeat;
    background-position: 78%;
    margin-bottom: 25px;
  }

  header nav.navbar{
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

  header .navbar-toggle{
    padding: 3px 5px 1px 5px;
  }

  header .navbar-nav{
    margin-top: 6px;
    font-weight: bold;
  }

  .navbar-default .navbar-nav > li > a {
    color: #fff;
    font-size: 17px;
  }

  .navbar .glyphicon-menu-hamburger:before{
    color:  #fff;
      font-size: 35px;
      text-shadow:
      -1px -1px 0 #122b46,
      1px -1px 0 #122b46,
      -1px 1px 0 #122b46,
      1px 1px 0 #122b46;
  }

  .navbar .navbar-header,
  .navbar .navbar-collapse{
    background-color: #122b46;
  }

  .navbar-brand{
      height: 61px;
      padding: 5px;
  }

  .navbar-brand > img{
      max-height: 100%;
  }

  .navbar-brand > span{
    position: absolute;
      top: 17px;
      left: 70px;
      width: 170px;
      color: #fff;
      font-family: Microgrammad Bold Extented;
      font-size: 13px;
      line-height: 14px;
      text-shadow:
      -1px -1px 0 #122b46,
      1px -1px 0 #122b46,
      -1px 1px 0 #122b46,
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
    text-shadow:
      -1px -1px 0 #122b46,
      1px -1px 0 #122b46,
      -1px 1px 0 #122b46,
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

  section.outras-publicacoes .carousel{
    padding: 0 15px;
      min-height: 370px;
  }

  section.outras-publicacoes img {
    margin: 0 auto;
    border: 5px solid #122b46;
    max-height: 400px;
  }

  section.outras-publicacoes .carousel-caption{
    position: relative;
      right: inherit;
      left: inherit;
  }

  section.outras-publicacoes .carousel-indicators{
    display: none;
  }

  section.outras-publicacoes .carousel-control{
    background: none;
  }

  section.outras-publicacoes .carousel-control span{
    background-color: #fff;
    color: #122b46;
    border: 5px solid #122b46;
      padding: 3px 3px 5px 3px;
  }

  @media screen and (min-width: 768px){
    section.outras-publicacoes .carousel-control span{
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 767px){
    section.outras-publicacoes .carousel-control span.glyphicon-chevron-left {
      left: 15px;
      top: 40%;
    }

    section.outras-publicacoes .carousel-control span.glyphicon-chevron-right {
      right: 15px;
      top: 40%;
    }
  }

  footer{
    background-color: #122b46;
      height: 50px;
      padding: 5px;
  }

  footer .logo-site {
    float: left;
  }

  footer .logo-site img{
    height: 40px;
  }

  footer a{
    color: #fff;
    float: right;
    font-family: Microgrammad Bold Extented;
      font-size: 10px;
  }

  footer a span{
    display: block;
      text-align: right;
  }

  footer .nome{
    font-size: 20px;
  }

  .ficha-de-personagem {
      margin-top: 15px;
      margin-bottom: 15px;
  }

  .ficha-de-personagem h1 {
    display: block;
    background-color: #4c4b4e;
    color: #fff;
    padding: 5px;
  }

  .ficha-de-personagem h2 {
    text-transform: capitalize;
    text-align: left;
  }

  .ficha-de-personagem h3 {
    font-family: Microgrammad Bold Extented;
    text-transform: capitalize;
  }

  @media screen and (max-width: 374px) {
    .ficha-de-personagem h1{
      font-size: 30px;

    }
    .ficha-de-personagem h2 {
      font-size: 27px;
    }
  }

  .ficha-de-personagem .ficha {
    border:  5px dashed #000;
    padding: 15px;
  }

  .ficha-de-personagem .fundo {
    background-color: #b2b5b7;
  }

  .ficha-de-personagem .form-control-feedback{
    right: 12px;
  }

  .ficha-de-personagem .has-error input {
    border-color: #a94442;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  }

  .ficha-de-personagem .header-ficha h2 {
    text-align: center;
  }

  .ficha-de-personagem .header-ficha .fundo {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    padding: 0 10px;

    label {
      margin: 10px;
    }

    div {
      width: 100%;
    }

    #nome {
      width: 50%;
      min-width: 165px;
    }
  }

  .ficha-de-personagem label,
  .ficha-de-personagem .header-ficha select {
    font-size: 20px;
    color: #fff;
  }

  .ficha-de-personagem .header-ficha select {
    display: inline-block;
    font-weight: bold;
    height: 34px;
    line-height: 1.42857143;
    background-color: #b2b5b7;
    border: 1px solid #fff;
    border-radius: 4px;
  }

  .ficha-de-personagem input {
    font-size: 18px;
    border: 3px solid #000;
  }

  .ficha-de-personagem input[type="number"]{
    text-align: center;
  }

  .ficha-de-personagem .caracteristicas label {
    text-transform: uppercase;
    font-size: 24px;
    padding: 5px;
  }
  .ficha-de-personagem .caracteristicas label:first-letter {
    color: #64666A;
    font-size: 35px;
  }

  .ficha-de-personagem .caracteristicas input {
    text-transform: uppercase;
    margin-right: 5px;
  }

  .ficha-de-personagem .caracteristicas .pontos label {
    font-size: 20px;
    text-transform: capitalize;
  }

  .ficha-de-personagem .caracteristicas .pontos span,
  .ficha-de-personagem .caracteristicas .pontos label:first-letter {
    font-size: 21px;
    color: #64666A;
  }

  .ficha-de-personagem div[class^="select"] {
    display: flex;
  }

  .ficha-de-personagem select option {
    text-transform: capitalize;
  }

  .ficha-de-personagem .turno-de-combate {
    padding: 15px;
  }

  .ficha-de-personagem textarea,
  .ficha-de-personagem .lista {
    background-image: -webkit-linear-gradient(left, #fff 10px, transparent 10px), -webkit-linear-gradient(right, #fff 10px, transparent 10px), -webkit-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -moz-linear-gradient(left, #fff 10px, transparent 10px), -moz-linear-gradient(right, #fff 10px, transparent 10px), -moz-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -ms-linear-gradient(left, #fff 10px, transparent 10px), -ms-linear-gradient(right, #fff 10px, transparent 10px), -ms-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -o-linear-gradient(left, #fff 10px, transparent 10px), -o-linear-gradient(right, #fff 10px, transparent 10px), -o-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: linear-gradient(to right, #fff 10px, transparent 10px), linear-gradient(to left, #fff 10px, transparent 10px), linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-size: 100% 100%, 100% 100%, 100% 31px;
  }

  .ficha-de-personagem textarea {
    line-height: 31px;
    padding: 8px;
    border: none;
  }

  .ficha-de-personagem textarea:focus{
    outline: none;
  }

  .ficha-de-personagem .adicionados{
      display: inline-block;
      height: 31px;
      padding-top: 6px;
  }

  .ficha-de-personagem .texto {
    padding-left: 5px;
  }

  .ficha-de-personagem .label-danger {
    display: inline-block;
  }

  .ficha-de-personagem .salvar-ficha {
    text-align: center;
    width: 100%;
  }

  .ficha-de-personagem .salvar-ficha button {
      margin: 10px auto 0px auto;
      background: #122b46;
  }

  .ficha-de-personagem {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .ficha-de-personagem h1 {
    display: block;
    background-color: #4c4b4e;
    color: #fff;
    padding: 5px;
  }

  .ficha-de-personagem h2 {
    text-transform: capitalize;
    text-align: left;
  }

  .ficha-de-personagem h3 {
    font-family: Microgrammad Bold Extented;
    text-transform: capitalize;
  }

  @media screen and (max-width: 374px) {
    .ficha-de-personagem h1 {
      font-size: 30px;
    }
    .ficha-de-personagem h2 {
      font-size: 27px;
    }
  }

  .ficha-de-personagem .ficha {
    border: 5px dashed #000;
    padding: 15px;
  }

  .ficha-de-personagem .form-control-feedback {
    right: 12px;
  }

  .ficha-de-personagem .has-error input {
    border-color: #a94442;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }

  .ficha-de-personagem .header-ficha h2 {
    text-align: center;
  }

  .ficha-de-personagem label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .ficha-de-personagem label,
  .ficha-de-personagem .header-ficha select {
    font-size: 20px;
    color: #fff;
  }

  .ficha-de-personagem .header-ficha select {
    display: inline-block;
    font-weight: bold;
    height: 34px;
    line-height: 1.42857143;
    background-color: #b2b5b7;
    border: 1px solid #fff;
    border-radius: 4px;
  }

  .ficha-de-personagem input {
    font-size: 18px;
    border: 3px solid #000;
  }

  .ficha-de-personagem input[type='number'] {
    text-align: center;
  }

  .ficha-de-personagem .caracteristicas label {
    text-transform: uppercase;
    font-size: 24px;
    padding: 5px;
  }
  .ficha-de-personagem .caracteristicas label:first-letter {
    color: #64666a;
    font-size: 35px;
  }

  .ficha-de-personagem .caracteristicas input {
    text-transform: uppercase;
    margin-right: 5px;
  }

  .ficha-de-personagem .caracteristicas .pontos label {
    font-size: 20px;
    text-transform: capitalize;
  }

  .ficha-de-personagem .caracteristicas .pontos span,
  .ficha-de-personagem .caracteristicas .pontos label:first-letter {
    font-size: 21px;
    color: #64666a;
  }

  .ficha-de-personagem div[class^='select'] {
    display: flex;
  }

  .ficha-de-personagem select option {
    text-transform: capitalize;
  }

  .ficha-de-personagem .turno-de-combate {
    padding: 15px;
  }

  .ficha-de-personagem textarea,
  .ficha-de-personagem .lista {
    background-image: -webkit-linear-gradient(left, #fff 10px, transparent 10px),
      -webkit-linear-gradient(right, #fff 10px, transparent 10px),
      -webkit-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -moz-linear-gradient(left, #fff 10px, transparent 10px),
      -moz-linear-gradient(right, #fff 10px, transparent 10px),
      -moz-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -ms-linear-gradient(left, #fff 10px, transparent 10px),
      -ms-linear-gradient(right, #fff 10px, transparent 10px),
      -ms-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -o-linear-gradient(left, #fff 10px, transparent 10px),
      -o-linear-gradient(right, #fff 10px, transparent 10px),
      -o-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: linear-gradient(to right, #fff 10px, transparent 10px),
      linear-gradient(to left, #fff 10px, transparent 10px),
      linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-size: 100% 100%, 100% 100%, 100% 31px;
  }

  .ficha-de-personagem textarea {
    line-height: 31px;
    padding: 8px;
    border: none;
  }

  .ficha-de-personagem textarea:focus {
    outline: none;
  }

  .ficha-de-personagem .adicionados {
    display: inline-block;
    height: 31px;
    padding-top: 6px;
  }

  .ficha-de-personagem .texto {
    padding-left: 5px;
  }

  .ficha-de-personagem .label-danger {
    display: inline-block;
  }

  .ficha-de-personagem .salvar-ficha {
    text-align: center;
    width: 100%;
  }

  .ficha-de-personagem .salvar-ficha button {
    margin: 10px auto 0px auto;
    background: #122b46;
  }

  .btn-default {
    color: #333 !important;
    background-color: #d4d4d4 !important;
    border-color: #8c8c8c !important;
  }
`;
