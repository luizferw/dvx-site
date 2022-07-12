import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  width: 100%;
  max-width: 1300px;

  font-size: 1.3rem;
  font-weight: 600;

  height: 7.6rem;

  background-color: white;

  margin-inline: auto;

  a {
    color: black;
  }

  img {
    max-width: 6.44rem;
  }

  li > a {
    opacity: 0.68;

    &:hover:not(.button) {
      color: #7b6ad7;
      opacity: 1;
    }
  }

  .index {
    display: flex;

    align-items: center;
    justify-content: space-between;

    height: 100%;

    margin-inline: 3.5rem;
  }

  .index-list {
    display: flex;
    align-items: center;

    & li a {
      display: flex;
      align-items: center;

      gap: 0.6rem;
    }

    &.left {
      margin-left: -0.05rem;
      gap: 6rem;

      .index-list-left__menu {
        .menu {
          display: none;
        }
      }
    }

    &.right {
      gap: 3rem;

      @media (max-width: 640px) {
        gap: 0;
      }
    }
  }

  .button {
    opacity: 1;

    margin-left: 2.4rem;

    font-weight: 700;

    background-color: rgb(247, 131, 35);
    color: white;

    padding: 0.84rem 2.8rem;

    border-radius: 3rem;
    border: 1px solid transparent;

    &:hover {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 1024px) {
    .index-list.left {
      gap: 3.5rem;
    }

    ul li a .material-symbols-outlined:not(.material-symbols-outlined.person) {
      display: none;
    }
  }

  @media (max-width: 840px) {
    .myads,
    .a-person {
      display: none;
    }
    .chat_icon,
    .notificationicon {
      display: block !important;
    }
  }

  @media (max-width: 815px) {
    .index-list-left__menu {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .menu {
        display: block !important;
        font-size: 3.8rem;
      }
    }
  }

  @media (max-width: 730px) {
    .notifications {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .chat {
      display: none;
    }

    .searchbutton {
      display: none;
    }
  }

  @media (max-width: 460px) {
    .chat_icon {
      display: none !important;
    }
  }
`

export const ToggleMenuStyle = styled.aside`
  position: absolute;
  top: 7.6rem;
  left: ${props => props.left};
  z-index: 99;

  box-shadow: 0 2px 2px #eee;

  transition: 500ms;

  width: 30rem;

  height: fit-content;

  overflow-y: scroll;

  background-color: #fff;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    border-bottom: 2px solid #eee;

    font-size: 1.6rem;
    font-weight: 400;

    .li-item {
      display: flex;

      gap: 1.7rem;

      padding-inline: 1rem;
      padding-block: 2.2rem;
    }

    .profile.li-item {
      width: 100%;

      border-block: 2px solid #eee;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .profile_span {
        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: flex-start;

        & .myacc {
          color: #6e0ad6;
          font-size: 1.4rem;
        }
      }
    }

    .config {
      font-size: 1.3637646rem;
    }
  }

  @media (max-width: 620px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
