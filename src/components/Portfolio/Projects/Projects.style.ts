import styled from 'styled-components'
import {Colors} from 'styled-components/Colors.style'
import {media} from 'styled-components/MediaQueries.style'

export const ProjectsStyled = styled.div`
  .projects-list {
    margin: 0px auto;
    padding: 0;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    .project-item {
      flex-wrap: nowrap;
      display: flex;
      flex-direction: column;
      width: 32%;
      flex-basis: 32%;
      margin: 0 0 32px;
      background: #fff;
      overflow: hidden;
      border-radius: 4px;
      color: #fff;
      padding: 0px;
      text-align: left;
      box-sizing: border-box;

      ${media.md`
        width: 100%;
        flex-basis: 100%;
        margin: 0 0 48px 0;
      `}

      &:first-child {
        .base-item {
          background-size: 50%;
          background-position-y: 40%;
        }
      }

      h3 {
        margin: 0;
        color: #fff;
      }

      p {
        margin: 0;
        color: ${Colors.primaryBlue};
      }

      .base-item {
        background: #e1e1e1 url(../../assets/images/me-trans.png) no-repeat 50%
          0%;
        background-size: contain;
        width: 100%;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        padding: 24px;
        box-sizing: border-box;

        ${media.md`
          background-size: cover;
        `}

        .info-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 2;
          background: ${Colors.primaryBlue};
          color: #fff;
          padding: 16px;
          box-sizing: border-box;
        }
      }

      .slide-item {
        background: rgba(0, 0, 0, 1);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(-101%, 0, 0);
        transition: all 0.3s ease-out;
        font-weight: 700;

        span {
          color: #fff;
          font-weight: 400;
        }
      }

      .slide-item[data-active='true'] {
        transform: translate3d(0, 0, 0);
      }

      .tech {
        margin-bottom: 16px;
      }

      > a {
        margin-bottom: 16px;
      }

      .description {
        color: ${Colors.primaryColor};
        padding: 0 16px 16px;
        font-weight: 400;
      }
    }
  }
`
