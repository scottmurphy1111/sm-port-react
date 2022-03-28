import {useAppContext} from 'common/context/useAppContext'
import CategoryTitle from 'components/shared/CategoryTitle'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {AboutItem} from 'models/about-item'
import {useEffect, useRef, useState} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {getPanelOffset} from '../../shared/getPanelOffset'
import {AboutStyled} from './About.style'
import AboutSnippet from './AboutSnippet'

interface SectionProps {
  setAboutOffset: (val: number) => void
  isAbout: boolean
}

const About = ({setAboutOffset, isAbout}: SectionProps) => {
  const [openItem, setOpenItem] = useState<AboutItem | null>(null)
  const {state, dispatch} = useAppContext()
  const {title, aboutItems} = state.about

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.about && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.about, sectionRef])

  const initOpenItem = () => {
    setTimeout(() => {
      const clickEvent = document.createEvent('MouseEvent')
      clickEvent.initMouseEvent(
        'click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
      const element = document.querySelector('.about-snippet')
      element?.dispatchEvent(clickEvent)
    }, 1500)
  }

  useEffect(() => {
    setAboutOffset(getPanelOffset('.about'))
  }, [setAboutOffset])

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
                <CategoryTitle title={title} computedStyle={undefined} />
              </FadeItem>
              <div className="about-items">
                <FadeItem>
                  {aboutItems?.map((item: AboutItem, id: number) => (
                    <AboutSnippet
                      key={`${id}`}
                      item={item}
                      computedStyle={undefined}
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

export default About
