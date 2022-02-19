import styled from 'styled-components'
import {Colors} from 'styles/Colors.style'

import media from '../../../styles/MediaQueries.style'

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
  transition: all 0.5s ease-out;
  padding: 0.8rem 0;

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
    padding: 0 1.6rem;
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: space-between;
    transform: translateX(0);
    transition: all 0.25s ease-out;
    margin: 0;
    min-height: auto;
    position: inherit;
    z-index: 4;
    right: 0;
    top: 0;
    flex-direction: row;
    background-color: ${Colors.primaryColor};

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
      font-size: 2rem;
      font-weight: 700;

      &[data-active='true'] {
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }
    }

    ${media.lg`
      justify-content: flex-start;
      transform: translateX(calc(100% + 3.6rem));
      position: absolute;
      min-height: 100vh;
      flex-direction: column;
            
      &[data-active='true'] {
        transform: translateX(1.2rem);
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
`
