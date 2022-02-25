import styled from 'styled-components'
import {Colors} from 'styled-components/helpers/Colors.style'

import lightBgImage from '../assets/images/bg-pattern-light.png'

interface props {
  light?: boolean
  section?: string
}

export const SectionPanel = styled.section<props>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 3;
  color: #fff;
  padding: 10rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.section === 'home' ? 'center' : 'flex-start'};
  background: ${props => (props.light ? `url(${lightBgImage})` : null)};

  h2 {
    color: ${props =>
      props.light ? Colors.primaryColor : Colors.secondaryColor};
    font-weight: 400;
  }

  .wrap {
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    padding: 0 1.6rem;
    margin: 0 auto;
  }
`
