import styled from 'styled-components';

export const Container = styled.div`

  textarea,
  .lista {
    background-image: -webkit-linear-gradient(left, #fff 10px, transparent 10px), -webkit-linear-gradient(right, #fff 10px, transparent 10px), -webkit-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -moz-linear-gradient(left, #fff 10px, transparent 10px), -moz-linear-gradient(right, #fff 10px, transparent 10px), -moz-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -ms-linear-gradient(left, #fff 10px, transparent 10px), -ms-linear-gradient(right, #fff 10px, transparent 10px), -ms-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: -o-linear-gradient(left, #fff 10px, transparent 10px), -o-linear-gradient(right, #fff 10px, transparent 10px), -o-linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-image: linear-gradient(to right, #fff 10px, transparent 10px), linear-gradient(to left, #fff 10px, transparent 10px), linear-gradient(#fff 30px, #b2b5b7 30px, #b2b5b7 31px, #fff 31px);
    background-size: 100% 100%, 100% 100%, 100% 31px;
  }

  textarea {
    line-height: 31px;
    padding: 8px;
    border: none;
  }

  textarea:focus{
    outline: none;
  }

  .adicionados{
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
`;
