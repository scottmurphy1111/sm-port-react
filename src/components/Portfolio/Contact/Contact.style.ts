import styled from 'styled-components'
import {Colors} from 'styles/Colors.style'
import media from 'styles/MediaQueries.style'

export const ContactStyled = styled.div`
  .block {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 4.8rem;

    &:last-child {
      margin-bottom: 0;
    }

    .contact-info {
      width: 100%;
      display: block;

      ul {
        padding: 0;
        display: inline-block;
        width: 100%;
        margin: 0;
      }

      li {
        width: 100%;
        padding: 0 0px;
        box-sizing: border-box;
        display: inline-block;
        text-align: left;
        list-style-type: none;
        color: ${Colors.primaryBlue};
        margin: 0 0 5px;

        ${media.md`
          margin: 0;
        `}

        a {
          color: ${Colors.primaryBlue};
        }
        .definition {
          color: #fff;
        }
      }
    }

    .social {
      > ul {
        padding: 0;
        display: inline-block;
        width: 100%;
        margin-top: 0px;

        > li {
          padding: 0 32px 0 0;
          max-width: 72px;
          width: 25%;
          box-sizing: border-box;
          display: inline-block;
          text-align: left;
          list-style-type: none;
          color: ${Colors.primaryBlue};

          ${media.md`
          max-width: 84px;
        `}

          a {
            cursor: pointer;
            position: relative;
            display: block;
          }
        }
      }
    }
  }

  .special-note {
    display: flex;
    flex-direction: column;
    margin-bottom: 4.8rem;

    p {
      display: inline-block;
      color: ${Colors.primaryBlue};
      margin: 0 0 3.2rem;

      &:last-child {
        margin: 0;
      }
    }
  }
`
