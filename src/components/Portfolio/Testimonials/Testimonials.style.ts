import styled from 'styled-components'
import {Colors} from 'styled-components/Colors.style'

export const TestimonialsStyled = styled.div`
  .testimonials {
    margin: 0;
    padding: 0 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;

    .testimonial-item {
      padding: 0 0 48px 16px;
      box-sizing: border-box;
      border-radius: 4px;

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
      color: rgba(165, 165, 165, 0.5);
      margin-top: 10px;
      font-style: italic;
      font-size: 16px;
    }

    .read-more {
      cursor: pointer;
      color: ${Colors.primaryBlue};
      text-transform: lowercase;
      display: inline;
      margin-left: 8px;
      font-size: 16px;
    }
  }
`
