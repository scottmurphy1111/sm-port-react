import styled from 'styled-components'
import {Colors} from 'styled-components/helpers/Colors.style'
import media from 'styled-components/helpers/MediaQueries.style'

export const SkillsStyled = styled.div`
  .skills {
    h2 {
      color: #fff;
    }
  }

  .skillset-wrapper {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
    flex-wrap: nowrap;
    justify-content: space-between;

    ${media.md`
      flex-wrap: wrap;
      padding: 0 0 4.8rem;
    `}

    .skillset-item {
      padding: 0;
      color: #fff;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 21%;
      flex-basis: 21%;
      align-items: flex-start;
      justify-content: stretch;

      ${media.md`
        width: 100%;
        flex-basis: 100%;
        margin: 0 0 4.8rem;
        padding: 0;
      `}
    }

    .image-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: center;
    }

    .image-container {
      width: 80px;
      height: 80px;
      margin: 0 auto 3.2rem;
      padding: 18px;
      box-sizing: border-box;
      border-radius: 50%;
      background: #fff;
    }

    img {
      width: 100%;
    }

    .skills-array {
      margin: 0;
      padding: 3.2rem 0rem 0;
      list-style: none;
      color: #fff;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      text-align: center;

      &:before {
        content: '';
        width: 50%;
        height: 4px;
        background-color: ${Colors.primaryBlue};
        display: block;
        margin: 0 auto;
        top: -32px;
        position: relative;
      }

      li {
        margin: 0 0 1.6rem;
        font-weight: 700;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`
