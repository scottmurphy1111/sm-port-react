import styled from 'styled-components'
import {media} from 'styled-components/MediaQueries.style'

export const NavStyled = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  background: #141414;
  display: flex;
  justify-content: space-between;
  transform: translateY(-60px);
  transition: all 0.5s ease-out 0.8s;
  padding: 8px;
  box-sizing: border-box;
  height: 70px;

  ${media.md`
    height: 55px;
  `}

  &.show {
    transform: translateY(0px);
  }

  .container {
    min-height: auto;

    ${media.lg`
      width: 100%;
    `}
  }

  .logo {
    display: flex;
    width: 96px;
    height: 100%;
    align-items: center;
    cursor: pointer;

    svg {
      width: 100%;
      pointer-events: none;
    }

    ${media.md`
      width: 70px;
    `}
  }

  .nav-wrapper {
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    ${media.lg`
      overflow: visible;
    `}
  }

  .nav-items {
    padding: 0 16px;
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    transform: translateX(0);
    transition: all 0.25s ease-out;
    margin: 0;
    min-height: auto;
    position: inherit;
    z-index: 4;
    right: 0;
    top: 0;
    flex-direction: row;
    background-color: rgba(20, 20, 20, 1);

    ${media.lg`
      width: 80%;
      padding: 0 32px 0 0;
      align-items: flex-end;
    `}

    &[data-active='true'] {
      transform: translateX(0);
    }

    li {
      text-align: center;
      position: relative;
      line-height: 48px;
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.25s ease-out;
      font-size: 20px;
      font-weight: 700;

      &.active {
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }
    }

    ${media.lg`
      justify-content: flex-start;
      transform: translateX(calc(100% + 36px));
      position: absolute;
      min-height: 100vh;
      flex-direction: column;
            
      &[data-active='true'] {
        transform: translateX(12px);
      }
    `}
  }

  .nav-button-wrapper {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: none;
    justify-content: flex-end;
    align-items: center;

    ${media.lg`
      display: flex;
    `}
  }

  .nav-button {
    display: none;
    width: 24px;
    height: 3px;
    background-color: #fff;

    &:before {
      content: '';
      width: 100%;
      height: 3px;
      background-color: #fff;
      transform: translateY(-9px);
      display: block;
    }

    &:after {
      content: '';
      width: 100%;
      height: 3px;
      background-color: #fff;
      transform: translateY(6px);
      display: block;
    }

    ${media.lg`
      display: block;
    `}
  }

  .close-btn {
    width: 30px;
    height: 30px;
    background: transparent;
    font-size: 16px;
    color: #fff;
    border: 3px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 900;
    position: absolute;
    left: -12px;
    top: 4px;
    opacity: 0;
    transition: opacity 0.01s linear 0.14s;

    &.show {
      transition: opacity 0.01s linear 0.05s;
      opacity: 1;
    }
  }
`
