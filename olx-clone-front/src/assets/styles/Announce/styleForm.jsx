import styled from 'styled-components'

export const FormStyle = styled.form`
  background-color: white;

  display: flex;
  flex-direction: column;

  padding-inline: 4rem;

  h2 {
    text-align: center;

    color: #4a4a4a;
    font-size: 3rem;
    font-weight: 700;

    padding-block: 2rem;
  }

  h4 {
    text-align: left;
  }

  span.error {
    font-size: 1.25rem;
    color: red;
    text-align: left;
  }

  textarea:focus,
  input:focus {
    outline: 1.5px solid #9027b0;
  }

  .form-container {
    border: 1px solid #c7c7c7;
    border-radius: 0.5rem;

    max-width: 1220px;
    width: 100%;

    margin: 0 auto;

    padding: 2.5rem;
    padding-top: 4.8rem;

    display: flex;
    flex-direction: column;

    .title,
    .price,
    .localization,
    .description {
      width: min(55rem, 100%);

      margin-bottom: 1.6rem;

      border-radius: 0.8rem;
      border: 1px solid #c7c7c7;

      font-size: 1.5rem;
      font-family: 'Nunito Sans', sans-serif;

      padding: 1.3rem;

      &.error {
        border: 1px solid red;
      }

      @media (max-width: 800px) {
        width: 100% !important;
      }
    }

    .form-bottom {
      margin-top: 0.5rem;

      font-size: 1.55rem;

      text-align: left;
      width: 24.5rem;

      h4 {
        padding-block: 1rem;
        margin-top: 0.5rem;
      }

      .add-photo {
        h4 {
          font-size: 1.44rem;
          padding-bottom: 0;
        }

        p {
          font-size: 1.21rem;
          margin-bottom: 1rem;
        }

        .image-container {
          position: relative;
          width: 14rem;

          color: #9027b0;

          text-align: center;

          border: 1px dashed #9027b0;
          border-radius: 0.1rem;

          padding: 2rem 0;

          label {
            display: flex;
            flex-direction: column;

            .box-icon {
              margin: 0 auto;
            }

            .box-title {
              font-size: 1.55rem;
            }

            .box-format {
              font-size: 1.1rem;
            }

            &:hover {
              cursor: pointer;
            }
          }

          &:hover {
            background-color: #fdf5ff;
            cursor: pointer;
          }

          .images-info {
            margin: 0;
          }
        }
      }

      .contact {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        margin-bottom: 1rem;
      }

      .hide-phone-checkbox {
        margin-right: 1rem;

        width: 1.5rem;
        height: 1.5rem;

        border-radius: none;
      }
    }

    @media (max-width: 550px) {
      padding-inline: 2rem;
    }
  }

  .submit-link {
    align-self: flex-end;

    button {
      margin-top: 3rem;
      margin-right: 6rem;
      margin-left: 1.5rem;
      margin-bottom: 4rem;
      font-weight: 600;
      font-size: 1.5rem;

      background-color: rgb(247, 131, 35);
      color: white;

      padding: 1.6rem 7rem;

      border-radius: 3rem;
      border: 1px solid transparent;

      cursor: pointer;

      @media (max-width: 800px) {
        width: 100%;

        margin-left: 0;
      }
    }
    @media (max-width: 800px) {
      align-self: center;
      display: block;
      width: 100%;

      margin-inline: auto;
    }
  }

  @media (max-width: 550px) {
    padding-inline: 1rem;
  }
`

export const CategoryItemStyle = styled.li`
  border-bottom: 1px solid #c7c7c7;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.3rem;
  font-weight: 300;

  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  div {
    display: flex;
    align-items: center;

    gap: 1rem;
  }

  &.active {
    color: #fff;
    svg {
      path {
        fill: #fff;
        stroke: #fff;
        stroke-width: 0.2;
      }
    }
  }

  @media (max-width: 550px) {
    padding-inline: 1rem;
  }
`

export const CategoryContainerStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2.5rem;

  min-width: 70rem;

  margin-top: 0.5rem;

  font-size: 1.55rem;

  text-align: left;

  .category-container__category {
    border: 1px solid #c7c7c7;
    border-bottom: none;
    border-radius: 0.4rem;

    margin-top: 1rem;

    &.error {
      border: 1px solid red;
    }
  }

  .active {
    background-color: #7769d6;
  }

  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    min-width: 100%;

    justify-content: center;
    align-items: center;

    .category-container__category {
      min-width: 100%;
    }
  }
`

export const CategoryContainerSpecificationStyle = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;

  border-inline: 1px solid #c7c7c7;
  border-radius: 0.4rem;

  margin-top: 1rem;

  height: fit-content;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    min-width: 100%;
  }
`
