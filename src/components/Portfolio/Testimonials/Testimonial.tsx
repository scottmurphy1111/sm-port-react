import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {useEffect, useRef, useState} from 'react'
import {Col, Row} from 'react-flexbox-grid'

import {TestimonialItem} from '../../../types/testimonial-item'

export const Testimonial = ({
  copy,
  reporter,
  computedstyle,
}: TestimonialItem) => {
  const divCopy = useRef<null | HTMLParagraphElement>(null)
  const testimonialItemRef = useRef<HTMLDivElement>(null)
  const allCopy = copy
  const fragCopy = `${allCopy.split(' ').slice(0, 12).join(' ')}...`
  const downArrow = String.fromCharCode(9660)
  const upArrow = String.fromCharCode(9650)

  useEffect(() => {
    handleFadeIn(testimonialItemRef)
  }, [])

  const [testimonial, setTestimonial] = useState({
    copy: fragCopy,
    linkCopy: downArrow,
    isShowing: false,
  })

  const toggleTestimonial = () => {
    if (!testimonial.isShowing) {
      setTestimonial({copy: allCopy, linkCopy: upArrow, isShowing: true})
      if (divCopy.current) {
        divCopy.current.innerText = allCopy
      }
    } else {
      setTestimonial({
        copy: fragCopy,
        linkCopy: downArrow,
        isShowing: false,
      })
      if (divCopy.current) {
        divCopy.current.innerText = fragCopy
      }
    }
  }

  return (
    <div
      className="testimonial-item"
      ref={testimonialItemRef}
      style={computedstyle}
    >
      <Row>
        <Col xs={12}>
          <p
            ref={divCopy}
            className={`testimonial ${testimonial.isShowing ? 'showing' : ''}`}
            dangerouslySetInnerHTML={{__html: testimonial.copy}}
          />
          <span className="read-more" onClick={() => toggleTestimonial()}>
            {testimonial.linkCopy}
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span className="reporter">{reporter}</span>
        </Col>
      </Row>
    </div>
  )
}
