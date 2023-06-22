import {CategoryTitle} from 'components/shared/CategoryTitle'
import {FadeItem} from 'components/shared/FadeItem/FadeItem'
import {SeeNext} from 'components/shared/SeeNext/SeeNext'
import {useAppContext} from 'context/useAppContext'
import {useMonitorResize} from 'hooks/useMonitorResize'
import {useEffect, useRef, useState} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'
import {AboutItem} from 'types/about-item'
import {getPanelOffset} from 'utils/getPanelOffset'

import {AboutStyled} from './About.style'
import {AboutSnippet} from './AboutSnippet'

interface SectionProps {
  setAboutOffset: (val: number) => void
  isAbout: boolean
}

export const About = ({setAboutOffset, isAbout}: SectionProps) => {
  const [openItem, setOpenItem] = useState<AboutItem | null>(null)
  const {state, dispatch} = useAppContext()
  const {title, aboutItems} = state.about

  const {isResizing} = useMonitorResize()

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.about && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.about, sectionRef])

  const initOpenItem = () => {
    setTimeout(() => {
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      })

      const element = document.querySelector('.about-snippet')
      element?.dispatchEvent(clickEvent)
    }, 1000)
  }

  useEffect(() => {
    setAboutOffset(getPanelOffset(sectionRef.current))
  }, [state.introAnimDone, isResizing])

  useEffect(() => {
    if (isAbout) return initOpenItem()
  }, [isAbout])

  return (
    <SectionPanel data-section="about" className="about" ref={sectionRef}>
      <AboutStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <FadeItem>
                <CategoryTitle title={title} />
              </FadeItem>
              <div className="about-items">
                <FadeItem>
                  {aboutItems?.map((item: AboutItem, id: number) => (
                    <AboutSnippet
                      key={`${id}`}
                      item={item}
                      openItem={openItem}
                      setOpenItem={setOpenItem}
                    />
                  ))}
                </FadeItem>
              </div>
            </Col>
            <SeeNext section="testimonials" />
          </Row>
        </Grid>
      </AboutStyled>
    </SectionPanel>
  )
}
