import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 109rem;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 90rem;
  }

  @media (max-width: 990px) {
    max-width: 68rem;
  }

  @media (max-width: 796px) {
    max-width: 51rem;
  }

  @media (max-width: 590px) {
    max-width: 40rem;
  }

  @media (max-width: 425px) {
    max-width: 100%;
    padding-inline: 1rem;
  }
`

export const ContainerSmall = styled(Container)`
  padding: 0 1.2rem 2.5rem;
`
