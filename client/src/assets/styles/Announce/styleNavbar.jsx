import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  width: 100%;
  max-width: 1300px;

  font-size: 1.3rem;
  font-weight: 600;

  height: 7.6rem;

  background-color: white;

  margin-inline: auto;

  border-bottom: a {
    color: black;
  }

  img {
    max-width: 6.44rem;
  }

  li > a {
    opacity: 0.68;
  }

  .index {
    display: flex;

    align-items: center;
    justify-content: space-between;

    height: 100%;

    margin-inline: 3.5rem;
  }

  .hello {
    background-color: #f5ecfe;

    padding: 0.7rem 1.5rem;

    border-radius: 9999px;

    font-size: 1.2rem;

    color: black;
  }
`
