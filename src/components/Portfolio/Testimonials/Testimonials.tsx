import {CategoryTitle} from 'components/shared/CategoryTitle'
import {FadeItem} from 'components/shared/FadeItem/FadeItem'
import {SeeNext} from 'components/shared/SeeNext/SeeNext'
import {useAppContext} from 'context/useAppContext'
import {useMonitorResize} from 'hooks/useMonitorResize'
import {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'
import {TestimonialItem} from 'types/testimonial-item'
import {getPanelOffset} from 'utils/getPanelOffset'

import {Testimonial} from './Testimonial'
import {TestimonialsStyled} from './Testimonials.style'

interface SectionProps {
  setTestimonialsOffset: (val: number) => void
}

export const Testimonials = ({setTestimonialsOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, testimonialsItems} = state.testimonials

  const {isResizing} = useMonitorResize()

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.testimonials && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.testimonials, sectionRef])

  useEffect(() => {
    setTestimonialsOffset(getPanelOffset(sectionRef.current))
  }, [state.introAnimDone, isResizing])

  return (
    <SectionPanel
      light
      data-section="testimonials"
      className="testimonials-section"
      ref={sectionRef}
    >
      <TestimonialsStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <FadeItem>
                <CategoryTitle title={title} />
              </FadeItem>
              <div className="testimonials">
                <FadeItem>
                  {testimonialsItems?.map(
                    (testimonial: TestimonialItem, id: number) => (
                      <Testimonial key={id + 1} {...testimonial} />
                    )
                  )}
                </FadeItem>
              </div>
            </Col>
            <SeeNext section="contact" light />
          </Row>
        </Grid>
      </TestimonialsStyled>
    </SectionPanel>
  )
}
