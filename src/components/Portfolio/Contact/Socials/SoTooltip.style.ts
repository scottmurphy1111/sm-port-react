import styled from 'styled-components'
import {Colors} from 'styled-components/helpers/Colors.style'

import headerBG from '../../../../assets/images/so-tooltip-bg.jpg'

export const SoTooltipStyled = styled.div`
  .so-tooltip {
    width: 320px;
    display: flex;
    flex-direction: column;
    bottom: 0;
    opacity: 0;
    position: absolute;
    z-index: 10;
    background: #fff;
    color: #141414;
    transform: scale(0) translatex(0px);
    transition: all 0.15s ease-out;
    transform-origin: bottom left;
    box-shadow: 5px 5px 0 #f48225;

    &.visible {
      opacity: 1;
      transform: scale(1) translateX(70px) translateY(63px);
    }

    .so-header-wrapper {
      background-color: ${Colors.primaryColor};
      background-image: url(${headerBG})
      padding: 0px;
      display: flex;
      justify-content: space-between;

      h3 {
        padding: 24px 0 24px 24px;
      }

      .reputation {
        color: #fff;
        padding: 24px 24px 0 0;
        box-sizing: border-box;
        flex-basis: 50px;

        &:after {
          content: '';
          width: auto;
          height: 5px;
          background: #f48225;
          display: block;
        }
      }
    }

    .so-body-wrapper {
      padding: 16px 24px;
    }

    h3 {
      color: #fff;
      font-size: 2rem;
      margin: 0;
    }

    p {
      padding: 0px 0px 8px;
      width: 100%;
      text-align: left;
      display: inline-block;
      margin: 0;
      box-sizing: border-box;

      &.clickable {
        color: #fff;
        padding: 0 0 10px;
      }
    }

    hr {
      border-style: solid;
    }

    ul {
      padding: 0;
      display: flex;
      width: 100%;
      flex-direction: row;
    }

    li {
      list-style-type: none;
      color: ${Colors.primaryBlue};
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 16px;
    }

    &:after {
      content: '';
      width: 0;
      height: 0;
      border-right: 6px solid #fff;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent;
      display: block;
      margin: 0 auto;
      position: absolute;
      left: -6px;
      top: 112px;
    }

    .so-profile-link {
      color: #f48225;
      font-size: 16px;
      text-transform: capitalize;
    }
  }
`
