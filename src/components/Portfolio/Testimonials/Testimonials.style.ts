import styled from 'styled-components'
import {Colors} from 'styled-components/helpers/Colors.style'
import media from 'styled-components/helpers/MediaQueries.style'

export const TestimonialsStyled = styled.div`
  .testimonials {
    margin: 0;
    padding: 0 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;

    li {
      padding: 3.2rem 0;
      box-sizing: border-box;
      border-radius: 4px;
      margin-bottom: 4.8rem;

      ${media.md`
        padding: 1.6rem 0;
      `}

      &:last-child {
        margin-bottom: 0;
      }
    }

    h3 {
      color: ${Colors.primaryColor};
    }

    .testimonial {
      margin: 0;
      color: ${Colors.primaryColor};
      line-height: 30px;
      display: inline;

      &:before {
        content: '"';
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 28px;
        color: ${Colors.primaryBlue};
        margin-left: -1.1rem;
        position: relative;
        left: -5px;
      }

      &.showing {
        &:after {
          content: '"';
          font-family: 'Times New Roman', Times, serif;
          font-style: italic;
          font-size: 28px;
          color: ${Colors.primaryBlue};
        }
      }
    }

    .reporter {
      display: block;
      color: ${Colors.primaryBlue};
      margin-top: 10px;
      font-style: italic;
    }

    .read-more {
      cursor: pointer;
      color: ${Colors.primaryBlue};
      text-transform: lowercase;
      display: inline;
      margin-left: 8px;
    }
  }
`
