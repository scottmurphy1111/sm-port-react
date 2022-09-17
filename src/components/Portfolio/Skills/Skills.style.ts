import styled from 'styled-components'
import {Colors} from 'styled-components/Colors.style'
import {media} from 'styled-components/MediaQueries.style'

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
      padding: 0 0 48px;
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
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        flex-basis: 100%;
        margin: 0 0 48px;
        padding: 0;

        &:nth-child(even) {
          flex-direction: row-reverse;

          .skills-array {
            ${media.md`
              text-align: right;
              padding: 0 32px 0 0;
            `}

            &:before {
              ${media.md`
                right: -100%;
              `}
            }
          }
        }

      `}
    }

    .image-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: center;

      ${media.md`
        width: 50%;
      `}
    }

    .image-container {
      width: 80px;
      height: 80px;
      margin: 0 auto 32px;
      padding: 18px;
      box-sizing: border-box;
      border-radius: 50%;
      background: #fff;

      ${media.md`
        margin: 0;
        `}
    }

    img {
      width: 100%;
    }

    .skills-array {
      margin: 0;
      padding: 32px 0 0;
      list-style: none;
      color: #fff;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      text-align: center;
      position: relative;

      ${media.md`
        padding: 0 0 0 32px;
        text-align: left;
      `}

      &:before {
        content: '';
        width: 50%;
        height: 4px;
        background-color: ${Colors.primaryBlue};
        display: block;
        margin: 0 auto;
        top: -32px;
        position: relative;

        ${media.md`
          width: 4px;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        `}
      }

      li {
        margin: 0 0 16px;
        font-weight: 700;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`
