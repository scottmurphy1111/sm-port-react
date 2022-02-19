import styled from 'styled-components'
import {Colors} from 'styles/Colors.style'
import media from 'styles/MediaQueries.style'

export const SkillsStyled = styled.div`
  .skills {
    h2 {
      color: #fff;
    }

    .see-next {
      bottom: 66px;
    }
  }

  .skillset {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
    flex-wrap: nowrap;
    justify-content: center;

    ${media.md`
      flex-wrap: wrap;
      padding: 0 0 4.8rem;
    `}

    > li {
      padding: 0 1.6rem 0 0;
      color: #fff;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 25%;
      flex-basis: 25%;
      margin: 0 1.6rem 0rem 0;
      align-items: flex-start;
      justify-content: stretch;

      &:last-child {
        margin-right: 0;
        padding-right: 0;

        ${media.md`
        margin-bottom: 0;
        padding-bottom: 0;
        `}
      }

      ${media.md`
        width: 100%;
        flex-basis: 100%;
        margin: 0 0 4.8rem;
        padding: 0;
      `}
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
      margin: 0 1.6rem;
      padding: 3.2rem 0rem 0;
      list-style: none;
      color: #fff;
      border-top: 2px solid ${Colors.primaryBlue};
      width: calc(100% - 3.2rem);
      box-sizing: border-box;
      height: 100%;
      text-align: center;

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
