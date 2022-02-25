import {useAppContext} from 'common/context/useAppContext'
import {getPanelOffset} from 'components/shared/getPanelOffset'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {TestimonialItem} from 'models/testimonial-item'
import React, {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import Testimonial from './Testimonial'
import {TestimonialsStyled} from './Testimonials.style'

interface SectionProps {
  setTestimonialsOffset: (val: number) => void
}

const Testimonials = ({setTestimonialsOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, testimonialsItems} = state.testimonials

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.testimonials && sectionRef) {
      // console.log(sectionRef)
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.testimonials, sectionRef])

  useEffect(() => {
    setTestimonialsOffset(getPanelOffset('.testimonials-section'))
  }, [setTestimonialsOffset])

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
              <h2 className="category-title">{title}</h2>
              <ul className="testimonials">
                {testimonialsItems?.map(
                  (testimonial: TestimonialItem, id: number) => (
                    <Testimonial key={id + 1} {...testimonial} />
                  )
                )}
              </ul>
            </Col>
            <SeeNext section="contact" light />
          </Row>
        </Grid>
      </TestimonialsStyled>
    </SectionPanel>
  )
}

export default Testimonials
