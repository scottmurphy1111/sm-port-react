import styled from 'styled-components'
import {Colors} from 'styles/Colors.style'
import media from 'styles/MediaQueries.style'

export const TestimonialsStyled = styled.div`
  .testimonials {
    margin: 0;
    padding: 0 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;

    li {
      padding: 3.2rem 3.2rem 3.2rem 4.8rem;
      box-sizing: border-box;
      border: 2px solid #0080ff;
      border-radius: 4px;
      margin-bottom: 4.8rem;

      ${media.md`
        padding: 1.6rem 1.6rem 1.6rem 2.4rem;
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

      &:after {
        content: '"';
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 28px;
        color: ${Colors.primaryBlue};
      }
    }

    .reporter {
      display: block;
      color: ${Colors.primaryBlue};
      margin-top: 0.4rem;
      font-style: normal;
    }

    .read-more {
      cursor: pointer;
      color: ${Colors.primaryBlue};
      text-transform: lowercase;
      display: inline;
      margin-left: 0.8rem;
    }
  }
`
