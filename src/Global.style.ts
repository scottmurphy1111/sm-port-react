import {createGlobalStyle} from 'styled-components'
import {media} from 'styled-components/MediaQueries.style'

import digiBg from './images/digi-bg1.png'
import {Colors} from './styled-components/Colors.style'

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    font-weight: 700;
    height: auto;
  }

  body {
    height: auto;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    background-color: ${Colors.primaryColor};
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    color: #fff;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .mobile-only {
    display: none !important;

    ${media.md`
      display: inline-block !important;
    `}
  }

  .fade-item {
    opacity: 0;
    transition: all 0.5s ease-out;
    transition-delay: 0s;
    transform: translateY(40px);
  }

  .bg-overlay {
    height: 100vh;
    width: 100%;
    background-color: rgba(8, 42, 76, 0.1);
    margin: 0 auto;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    transition: all 0.15s ease-out;
  }

  .static-bg {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: url(${digiBg}) repeat center center;
    background-size: cover;
  }

  .category-title {
    color: #fff;
    padding: 0;
    margin: 0 0 32px;
    font-size: 32px;
    font-weight: 400;
    text-align: left;
    visibility: visible;

    ${media.md`
      text-align: center;
    `}
  }
`
