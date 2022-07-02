import styled from 'styled-components'

export const HeaderStyle = styled.header`
  height: 23.4rem;
  background-color: #6e0ad6;

  position: relative;
`

export const SearchBarStyle = styled.div`
  border: 1px solid white;
  border-radius: 0.2rem;
  position: relative;

  top: 3.1rem;

  margin: 0 1rem;

  .search-input,
  .search-button {
    border: none;

    background: white;

    outline: none;

    padding: 1.7rem 1.7rem;

    @media (max-width: 450px) {
      padding: 1.3rem 1rem;
    }
  }

  .search-input {
    width: 100%;

    font-size: 1.9rem;
  }

  .search-button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 1.8rem 1.8rem;

    border-left: 2px solid rgb(210, 210, 210);

    height: 100%;

    cursor: pointer;

    & span {
      margin-top: 0.4rem;

      @media (max-width: 450px) {
        margin-top: 0%;
      }
    }

    &:hover {
      background-color: #9e5db8;
      color: white;
    }

    @media (max-width: 400px) {
      padding-inline: 1.1rem;
    }
  }
`

export const CategoryMenuStyle = styled.div`
  margin-top: 5rem;
  left: 0;

  width: 100%;

  padding-left: 0;

  display: flex;
  gap: 2.3rem;
  justify-content: center;

  font-size: 1.1rem;

  overflow-x: auto;

  .category-item {
    cursor: pointer;

    li:nth-child(1) {
      background-color: white;

      border-radius: 50%;

      min-width: 5.4rem;
      max-width: 5.5rem;
      min-height: 5.4rem;

      margin: 0 auto;

      position: relative;

      transform: rotateZ(7deg);
    }

    li:nth-child(2) {
      font-family: sans-serif;
      font-size: 1.025882rem;
      line-height: 1.4;

      color: white;

      width: 7rem;

      margin: 0.7rem auto;
    }

    li span {
      color: rgb(74, 74, 74);

      opacity: 0.85;

      position: absolute;
      top: 1.4rem;
      right: 1.6rem;

      transform: scale(1.3);

      &::selection {
        background: none;
      }
    }

    @media (max-width: 1200px) {
      position: static;

      &.fashion,
      &.agriculture {
        display: none;
      }
    }

    @media (max-width: 990px) {
      & li:nth-child(2) {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 796px) {
    justify-content: flex-start;
    /* &.fashion,
    &.agriculture {
      display: none;
    } */
  }
`
