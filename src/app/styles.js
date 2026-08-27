import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 700px) {
    flex-wrap: nowrap;
    max-height: 430px;
  }

  .players-container {
    flex: 1;
  }

  .players {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .player {
    flex: 1;
    margin: 10px;
  }

  .player-1,
  .player-2 {
    margin-top: 20px;
  }

  .btn {
    width: 100%;
  }

  #fight {
    margin-bottom: 20px;
  }

  .results {
    flex: 1;
    display: none;
    margin-left: 15px;
    background-color: lightblue;
    padding: 20px;
    overflow-y: auto;
  }

  .td-char-value {
    font-size: 50px;
  }

  #select-player {
    margin-bottom: 10px;
  }

  .navbar-toggler-icon {
    position: relative;
    background-image: none !important;
  }

  .navbar-toggler-icon:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 7px;
    width: 1em;
    height: 0.15em;
    background: #fff;
    box-shadow: 0 0.25em 0 0 #fff, 0 0.5em 0 0 #fff;
  }

  .empty-characters {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }

  .empty-characters a {
    text-decoration: none;
  }

  .empty-characters a:hover {
    font-size: 18px;
  }
`;
