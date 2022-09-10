import styled from 'styled-components'
import {Colors} from 'styled-components/helpers/Colors.style'
import {media} from 'styled-components/helpers/MediaQueries.style'

export const AboutStyled = styled.div`
  .about-items {
    display: flex;
    margin: 0px auto 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    ${media.md`
      padding: 0 0 4.8rem;
    `}

    .about-snippet {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 0px 1.6rem 0;
      color: #fff;
      padding: 0 0px 0px;
      vertical-align: middle;
      position: relative;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
      text-align: left;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }

      .about-link {
        pointer-events: none;
        color: ${Colors.primaryBlue};
        display: flex;
        align-items: center;

        img {
          width: 5.6rem;
          height: 5.6rem;
        }

        h3 {
          margin: 0;
          font-size: 2.4rem;
        }
      }

      .about-description {
        padding-left: 5.6rem;
        transition: all 0.1s ease-out 0s;
        opacity: 0;
        height: 0;

        p {
          margin: 0;
          height: 28px;
          font-weight: 400;
        }

        &.show {
          opacity: 1;
        }
      }
    }
  }
`
