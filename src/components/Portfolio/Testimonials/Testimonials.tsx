import {AppContext} from 'App'
import {getPanelOffset} from 'components/shared/getPanelOffset'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {TestimonialItem} from 'models/testimonial-item'
import React, {useContext, useEffect} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import Testimonial from './Testimonial'
import {TestimonialsStyled} from './Testimonials.style'

interface SectionProps {
  setTestimonialsOffset: (val: number) => void
}

const Testimonials = ({setTestimonialsOffset}: SectionProps) => {
  const {testimonials} = useContext(AppContext)
  const {title, testimonialsArray} = testimonials

  useEffect(() => {
    setTestimonialsOffset(getPanelOffset('.testimonials-section'))
  }, [setTestimonialsOffset])

  return (
    <SectionPanel
      light
      data-section="testimonials"
      className="testimonials-section"
    >
      <TestimonialsStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="category-title">{title}</h2>
              <ul className="testimonials">
                {testimonialsArray.map(
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
