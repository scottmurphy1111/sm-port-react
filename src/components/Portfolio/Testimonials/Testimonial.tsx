import React, {useRef, useState} from 'react'

import {TestimonialItem} from '../../../models/testimonial-item'

const Testimonial = ({copy, reporter}: TestimonialItem) => {
  const divCopy = useRef<any>(null)
  const allCopy = copy
  const fragCopy = `${allCopy.split(' ').slice(0, 9).join(' ')}...`

  const [testimonial, setTestimonial] = useState({
    copy: fragCopy,
    linkCopy: 'Read More',
    isShowing: false,
  })

  const toggleTestimonial = () => {
    if (!testimonial.isShowing) {
      setTestimonial({copy: allCopy, linkCopy: 'Read Less', isShowing: true})
      divCopy.current.innerText = allCopy
    } else {
      setTestimonial({
        copy: fragCopy,
        linkCopy: 'Read More',
        isShowing: false,
      })
      divCopy.current.innerText = fragCopy
    }
  }

  return (
    <li className="fade-item">
      <p
        ref={divCopy}
        className="testimonial"
        dangerouslySetInnerHTML={{__html: testimonial.copy}}
      />
      <span className="read-more" onClick={() => toggleTestimonial()}>
        {testimonial.linkCopy}
      </span>
      <span className="reporter">{reporter}</span>
    </li>
  )
}

export default Testimonial
