import {useAppContext} from 'common/context/useAppContext'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import useMediaMatcher from 'hooks/useMediaMatcher'
import {useCallback, useEffect, useRef, useState} from 'react'
import {Col, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {getPanelOffset} from '../../shared/getPanelOffset'
import Gear from './Gear/Gear'
import {HomeStyled} from './Home.style'

interface SectionProps {
  setHomeOffset: (val: number) => void
}

const Home = ({setHomeOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {name, subHeadingA, subHeadingB} = state.home
  const [show, setShow] = useState(false)
  const [scrollable, setScrollable] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.home && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.home, sectionRef])

  const disableScroll = useCallback(() => {
    const body = document.body
    return scrollable
      ? (body.style.overflow = 'visible')
      : (body.style.overflow = 'hidden')
  }, [scrollable])

  useEffect(() => {
    setHomeOffset(getPanelOffset('.home'))
    disableScroll()

    if (state.introAnimDone) {
      setShow(true)
      setScrollable(true)
    }
  }, [scrollable, setHomeOffset, disableScroll, state.introAnimDone])

  return (
    <SectionPanel
      data-section="home"
      section="home"
      className="home"
      ref={sectionRef}
    >
      <HomeStyled>
        <Row>
          <Col xs={12}>
            <div className="panel-static">
              <div className="static-inner">
                <Gear />
                <div className="copy-block">
                  <h1>
                    <span className={`name ${show ? 'show' : ''}`}>{name}</span>
                  </h1>
                  <p className={`tagline ${show ? 'show' : ''}`}>
                    {subHeadingA + ' '}
                    {useMediaMatcher('md') && <br className="mobile-only" />}
                    {subHeadingB}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <SeeNext section="skills" show={show} />
        </Row>
      </HomeStyled>
    </SectionPanel>
  )
}

export default Home
