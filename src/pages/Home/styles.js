import styled from 'styled-components';

export const Container = styled.div`
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

  .ficha-de-personagem .fundo {
    background-color: #b2b5b7;
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

  .ficha-de-personagem .header-ficha .fundo {
    height: 75px;
  }

  @media screen and (min-width: 768px) {
    .ficha-de-personagem .header-ficha .fundo {
      height: 160px;
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
`;
