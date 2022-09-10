import styled from 'styled-components'
import {Colors} from 'styled-components/helpers/Colors.style'
import {media} from 'styled-components/helpers/MediaQueries.style'

export const HomeStyled = styled.div`
  .panel-static {
    text-align: center;
  }

  .static-inner {
    position: relative;
    transform: scale(1, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .copy-block {
    position: absolute;

    h1 {
      font-size: 4.8rem;
      margin: 0 auto;
      color: ${Colors.primaryBlue};
      width: 100%;

      ${media.md`
        font-size: 4rem;
      `}

      .name {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease-in-out;

        &.show {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .tagline {
      margin: 0em auto;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease-in-out 0.4s;
      font-weight: 700;

      &.show {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .see-next {
    transform: translateY(100px);
    transition: all 0.5s ease-out 0.8s;

    &.show {
      transform: translateY(0px);
    }
  }
`
