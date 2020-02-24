import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  h1 {
    display: block;
    background-color: #4c4b4e;
    color: #fff;
    padding: 5px;
  }

  h2 {
    text-transform: capitalize;
    text-align: left;
  }

  h3 {
    font-family: Microgrammad Bold Extented;
    text-transform: capitalize;
  }

  @media screen and (max-width: 374px) {
    h1{
      font-size: 30px;

    }
    h2 {
      font-size: 27px;
    }
  }

  .ficha {
    border:  5px dashed #000;
    padding: 15px;
  }

  .fundo {
    background-color: #b2b5b7;
  }

  .has-error {
    border-color: #a94442;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  }

  .header-ficha h2 {
    text-align: center;
  }

  .header-ficha .fundo {
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

    #name {
      width: 50%;
      min-width: 165px;
    }
  }

  label,
  .header-ficha select {
    font-size: 20px;
    color: #fff;
  }

  .header-ficha select {
    display: inline-block;
    font-weight: bold;
    height: 34px;
    line-height: 1.42857143;
    background-color: #b2b5b7;
    border: 1px solid #fff;
    border-radius: 4px;
    margin-left: 10px;
  }

  input {
    font-size: 18px;
    border: 3px solid #000;
  }

  input[type="number"]{
    text-align: center;
  }

  div[class^="select"] {
    display: flex;
  }

  select option {
    text-transform: capitalize;
  }

  .turno-de-combate {
    padding: 15px;
  }

  .salvar-ficha {
    text-align: center;
    width: 100%;
  }

  .salvar-ficha button {
      margin: 10px auto 0px auto;
      background: #122b46;
  }

  h1 {
    display: block;
    background-color: #4c4b4e;
    color: #fff;
    padding: 5px;
  }

  h2 {
    text-transform: capitalize;
    text-align: left;
  }

  h3 {
    font-family: Microgrammad Bold Extented;
    text-transform: capitalize;
  }

  @media screen and (max-width: 374px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 27px;
    }
  }

  .ficha {
    border: 5px dashed #000;
    padding: 15px;
  }

  .form-control-feedback {
    right: 12px;
  }

  .has-error input {
    border-color: #a94442;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }

  .header-ficha h2 {
    text-align: center;
  }

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }

  label,
  .header-ficha select {
    font-size: 20px;
    color: #fff;
  }

  .header-ficha select {
    display: inline-block;
    font-weight: bold;
    height: 34px;
    line-height: 1.42857143;
    background-color: #b2b5b7;
    border: 1px solid #fff;
    border-radius: 4px;
  }

  input {
    font-size: 18px;
    border: 3px solid #000;
  }

  input[type='number'] {
    text-align: center;
  }

  .caracteristicas label {
    text-transform: uppercase;
    font-size: 24px;
    padding: 5px;
  }
  .caracteristicas label:first-letter {
    color: #64666a;
    font-size: 35px;
  }

  .caracteristicas input {
    text-transform: uppercase;
    margin-right: 5px;
  }

  .caracteristicas .pontos label {
    font-size: 20px;
    text-transform: capitalize;
  }

  .caracteristicas .pontos span,
  .caracteristicas .pontos label:first-letter {
    font-size: 21px;
    color: #64666a;
  }

  div[class^='select'] {
    display: flex;
  }

  select option {
    text-transform: capitalize;
  }

  .turno-de-combate {
    padding: 15px;
  }

  textarea,
  .lista {
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

  textarea {
    line-height: 31px;
    padding: 8px;
    border: none;
  }

  textarea:focus {
    outline: none;
  }

  .adicionados {
    display: inline-block;
    height: 31px;
    padding-top: 6px;
  }

  .texto {
    padding-left: 5px;
  }

  .label-danger {
    display: inline-block;
  }

  .salvar-ficha {
    text-align: center;
    width: 100%;
  }

  .salvar-ficha button {
    margin: 10px auto 0px auto;
    background: #122b46;
  }
`;
