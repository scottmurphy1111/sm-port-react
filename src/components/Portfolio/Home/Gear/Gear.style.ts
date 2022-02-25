import styled, {keyframes} from 'styled-components'
import media from 'styled-components/helpers/MediaQueries.style'

const spin = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(220deg);
  }
`
export const GearStyled = styled.div`
  .gear-icon {
    width: 250px;
    opacity: 1;
    transition: opacity 1s ease-out 0s;

    ${media.md`
      width: 200px;
    `}

    &.hide {
      opacity: 0;
    }

    .gear {
      animation: ${spin} 3s forwards linear;
      transform-origin: center center;
      opacity: 0.125;
      transition: opacity 1s ease-in 0s;

      &.show {
        opacity: 0.9;
      }
    }

    .left-bracket {
      opacity: 0;
      transition: opacity 1s ease-in 0s;

      &.show {
        opacity: 1;
        transition: opacity 1.5s ease-in-out 0.25s;
      }
    }

    .ess {
      transform-origin: bottom center;
      opacity: 0;
      transition: opacity 1s ease-in 0s;

      &.show {
        opacity: 1;
        transition: opacity 1.5s ease-in-out 0.25s;
      }
    }

    .emm {
      transform-origin: bottom center;
      opacity: 0;
      transition: opacity 1s ease-in 0s;

      &.show {
        opacity: 1;
        transition: opacity 1.5s ease-in-out 0.25s;
      }
    }

    .right-bracket {
      opacity: 0;
      transition: opacity 1s ease-in 0s;

      &.show {
        opacity: 1;
        transition: opacity 1.5s ease-in-out 0.25s;
      }
    }
  }
`
