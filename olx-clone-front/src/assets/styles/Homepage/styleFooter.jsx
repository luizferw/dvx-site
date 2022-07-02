import styled from 'styled-components'

export const FooterStyle = styled.footer`
  padding: 6.5rem auto;

  border-top: 0.2px solid rgb(210, 210, 210);

  a {
    color: rgb(74, 74, 74);
  }

  .header {
    display: flex;
    justify-content: space-between;

    background-color: rgb(246, 246, 246);

    font-size: 1.3rem;

    align-items: center;

    padding-bottom: 3rem;

    h4 {
      font-weight: 600;
      opacity: 1;

      margin-bottom: 0.4rem;
    }

    ul {
      display: flex;

      align-items: center;

      gap: 3rem;
    }

    .social-links {
      gap: 3rem;

      svg {
        opacity: 0.4;

        path {
          transition: fill 200ms linear;
        }

        &:hover {
          opacity: 0.8;
        }

        &.tw-icon path:hover,
        &.lkn-icon path:hover,
        &.fb-icon path:hover {
          fill: blue;
        }

        &.yt-icon path:hover {
          fill: red;
        }

        &.ig-icon path:hover {
          fill: #e2476c;
        }
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;

    gap: 0.65rem;
    font-size: 1.14rem;

    text-align: center;

    padding-top: 3rem;

    border-top: 1px solid rgb(210, 210, 210);

    opacity: 0.8;

    .disclaimer.media-small {
      display: none;
      gap: 1.4rem;

      justify-content: center;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px) {
    padding-block: 2.5rem;

    .header {
      .olx-links {
        display: block;

        margin: 0 auto;
      }

      .social-links {
        display: none;
      }

      .help {
        margin-bottom: 2.5rem;
      }

      .footer {
        text-align: center;

        gap: 1.3rem;
      }
    }
  }

  @media (max-width: 1024px) {
    padding-bottom: 7rem;

    .header .olx-links li {
      margin-bottom: 1.8rem;
    }

    .footer {
      gap: 2rem;

      .disclaimer {
        display: none;

        &.media-small {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .header {
      padding-bottom: 1rem;

      .olx-links {
        margin-inline: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        row-gap: 0rem;
      }
    }

    .footer {
      padding-inline: 0.5rem;
    }
  }
`
