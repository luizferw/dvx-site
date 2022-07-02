import styled from 'styled-components'

export const RecentAdsStyle = styled.section`
  background-color: white;

  padding-bottom: 23rem;

  a {
    color: rgb(74, 74, 74);
  }

  h2 {
    padding-top: 3rem;
    padding-left: 1.45rem;

    margin-bottom: 0.5rem;
  }

  .recent-items {
    padding: 1.8rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 11.8rem;

    grid-column-gap: 3rem;
    grid-row-gap: 11rem;
  }

  @media (max-width: 1200px) {
    .recent-items {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 14rem;
    }
  }

  @media (max-width: 990px) {
    .recent-items {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 796px) {
    .recent-items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 590px) {
    .recent-items {
      padding-inline: 5rem;
      grid-template-columns: 1fr;
      grid-row-gap: 7.5rem;
    }
  }
`

export const AdsItemStyle = styled.div`
  font-size: 1.15rem;
  text-align: left;

  min-width: ${props => props.minWidth || 0};

  .item-img {
    border-radius: 0.8rem;
  }

  .item-title {
    font-weight: 400;
    line-height: 1.87rem;
    font-size: 1.4rem;

    margin-bottom: 0.43rem;
    margin-top: 0.4rem;
  }

  .item-price {
    font-weight: 700;
    font-size: 1.54rem;
  }
`

export const PremiumGalleryStyle = styled.section`
  background-color: #f6f6f6;

  padding-top: 1rem;
  padding-bottom: 4rem;

  a {
    color: rgb(74, 74, 74);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: fit-content;
    padding: 2.2rem 0 1.4rem;

    background-color: #f6f6f6;

    .list-left {
      display: flex;
      gap: 1.5rem;
    }

    .list-right {
      display: flex;
      gap: 1rem;

      li {
        font-size: 1.49rem;

        a {
          color: #9027b0;
        }
      }
    }

    img {
      max-width: 2.5rem;
      max-height: 2.8rem;

      background-color: #f6f6f6;
    }
  }

  @media (max-width: 1200px) {
    padding-bottom: 0;

    header {
      padding-bottom: 0;

      .list-left {
        gap: 0;
      }
    }
  }

  @media (max-width: 990px) {
    h2 {
      font-weight: 400;
      font-size: 1.9rem;
    }

    header .list-right li {
      font-size: 1.38rem;
    }
  }

  @media (max-width: 590px) {
    header {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.4rem;

      .list-right li {
        font-size: 1.38rem;
      }
    }
  }
`

export const PremiumItems = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 11.8rem;

  overflow-x: auto;
  overflow-y: hidden;

  height: 20rem;

  grid-gap: 2rem;
  grid-row-gap: 100vh;
`

export const ChooseStateStyle = styled.section`
  background-color: white;

  height: 13.4rem;
  max-width: 111rem;

  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.7rem;

  padding-left: 2rem;

  .list-top {
    display: flex;

    gap: 1.3rem;

    font-weight: 600;
    font-size: 1.92rem;
  }

  .list-bottom {
    display: flex;

    gap: 0.7rem;
    opacity: 0.9;

    a {
      font-size: 1.5rem;
      font-weight: 600;
      color: #9027b0;
    }
  }

  @media (max-width: 1200px) {
    width: 90rem;
    margin-inline: auto;

    padding-left: 1rem;

    h2 {
      font-size: 2.2rem;
      font-weight: 400;
    }

    .list-top {
      gap: 0;
    }

    .list-bottom {
      gap: 0.8rem;

      a {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 990px) {
    display: none;
  }
`

export const DiscoverStyle = styled.section`
  text-align: left;

  .header {
    padding-block: 2.2rem;
  }
  .grid-container {
    height: 35rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-gap: 0.2rem;
  }
  .grid-container.media-small {
    display: none;
  }

  .grid-container-half {
    display: grid;
    grid-template-rows: 20rem 1fr;
    grid-gap: 0.2rem;
  }

  .grid-container-half-middle {
    display: grid;
    grid-template-rows: 1fr 20rem;
    grid-gap: 0.2rem;
  }

  .grid-item {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: flex-end;

    cursor: pointer;

    color: white;

    padding: 0 0 1.17rem 1rem;

    ul > li {
      text-shadow: 0.5px 0.4px #b4b3b3;
    }

    ul > li:nth-child(1) {
      font-size: 1.3rem;
    }

    ul > li:nth-child(2) {
      font-size: 1.8rem;
    }
  }

  .grid-item.hands {
    background-image: url(https://images.unsplash.com/photo-1417733403748-83bbc7c05140?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870);

    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  .grid-item.house {
    background-image: url(https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870);
  }

  .grid-item.phone {
    background-image: url(https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870);
  }

  .grid-item.videogame {
    background-image: url(https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872);
  }

  .grid-item.car {
    background-image: url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870);
  }

  .grid-item.car-key {
    background-image: url(https://images.unsplash.com/photo-1533558701576-23c65e0272fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387);

    border-top-right-radius: 0.5rem;
  }

  .grid-item.people {
    background-image: url(https://img.freepik.com/free-vector/world-smile-day-cute-cartoon-smiling-people-smiling-happy-laughing-enjoying-cartoon-illustration_107355-784.jpg?w=2000);

    border-bottom-right-radius: 0.5rem;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 2.2rem;
      font-weight: 400;
    }
  }

  @media (max-width: 990px) {
    .grid-container {
      display: none;

      &.media-small {
        display: flex;
        height: fit-content;
        flex-direction: column;

        gap: 2rem;
      }
    }

    .grid-container-half-middle,
    .grid-container-half {
      display: none;
    }

    .grid-item {
      display: flex;
      padding-left: 1rem;
      height: 14rem;
    }

    .about-grid-container {
      display: flex;
      flex-direction: column;
    }

    .about-grid-item-content {
      &.left {
        width: 60%;
      }

      &.right {
        width: 50%;
      }
    }
  }
`
export const AboutStyle = styled.section`
  text-align: left;

  .header {
    background-color: rgb(246, 246, 246);

    padding: 2.2rem 0 1.7rem;
  }

  .about-grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 3rem;
  }

  .about-grid-item-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: relative;

    color: white;

    height: 18rem;

    border-radius: 0.5rem;

    padding-left: 2.2rem;

    background-color: #6e0ad6;

    cursor: pointer;

    h3 {
      font-size: 1.85rem;
      font-weight: 600;

      margin-bottom: 0.55rem;

      padding-top: 0.5rem;

      line-height: 2.6rem;

      opacity: 0.9;

      width: 23rem;

      @media (max-width: 333px) {
        width: 100%;
      }
    }

    p {
      font-size: 1.3rem;

      opacity: 0.8;
    }

    figure img {
      border-radius: 0.5rem;
      transform: translateY(0.2rem);

      position: absolute;

      top: 0;
      right: 0;

      z-index: 2;

      border-bottom: 2.8px solid rgb(246, 246, 246);
    }

    &.left {
      grid-template-columns: 1fr 15rem;

      @media (max-width: 333px) {
        display: flex;
        text-align: center;
        padding: 0;
        width: 100%;
      }
    }

    &.right {
      grid-template-columns: 1fr 24rem;

      figure img {
        width: 23.5rem;
      }

      @media (max-width: 590px) {
        padding-block: 10rem;
      }

      @media (max-width: 333px) {
        display: flex;
        text-align: center;
        padding: 0;
        width: 100%;
      }
    }

    &.right figure img,
    &.left figure img {
      @media (max-width: 590px) {
        display: none;
      }
    }

    @media (max-width: 420px) {
      height: 22rem;
    }

    @media (max-width: 333px) {
      padding-inline: 1rem;
    }
  }

  .about-grid-item-content {
    align-self: center;

    z-index: 99;
  }

  .about-grid-item-content.left {
    width: 71%;

    @media (max-width: 333px) {
      width: 100% !important;
      padding-inline: 1rem;

      text-align: center;
    }
  }

  .about-grid-item-content.right {
    width: 55%;

    @media (max-width: 333px) {
      width: 100% !important;
      padding-inline: 1rem;

      text-align: center;
    }
  }

  .about-btn {
    border: none;
    border-radius: 2.5rem;

    background-color: rgb(247, 131, 35);

    font-size: 1.28rem;
    color: white;

    padding: 0.75rem 3.65rem;

    margin-top: 1rem;

    cursor: pointer;

    &:hover {
      filter: brightness(1.1);
    }

    &.right {
      padding: 0.75rem 2.6rem;
    }
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 2.2rem;
      font-weight: 400;
    }

    .about-grid-item-content {
      &.left {
        width: 100%;
      }

      &.right {
        width: 63%;
      }
    }
  }

  @media (max-width: 990px) {
    .about-grid-container {
      display: flex;
      flex-direction: column;
    }

    .about-grid-item-content {
      &.left {
        width: 60%;
      }

      &.right {
        width: 50%;
      }
    }
  }
`

export const PopularSearchStyle = styled.section`
  padding-bottom: 8.5rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    margin-top: 1.8rem;

    li {
      text-align: center;

      margin-bottom: 0.75rem;

      a {
        font-size: 1.5rem;
        color: rgb(74, 74, 74);
        opacity: 0.87;

        border: 1px solid rgb(74, 74, 74);
        border-radius: 5rem;

        padding: 0.48rem 1.6rem;

        &:hover {
          opacity: 1;
          color: #9027b0;
          border-color: #9027b0;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 2.2rem;
      font-weight: 400;
    }
  }

  @media (max-width: 1024px) {
    padding-bottom: 4rem;
  }
`
