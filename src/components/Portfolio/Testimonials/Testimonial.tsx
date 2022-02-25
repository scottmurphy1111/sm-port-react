import React, {useRef, useState} from 'react'

import {TestimonialItem} from '../../../models/testimonial-item'

const Testimonial = React.memo(({copy, reporter}: TestimonialItem) => {
  const divCopy = useRef<any>(null)
  const allCopy = copy
  const fragCopy = `${allCopy.split(' ').slice(0, 12).join(' ')}...`

  const [testimonial, setTestimonial] = useState({
    copy: fragCopy,
    linkCopy: '▼',
    isShowing: false,
  })

  const toggleTestimonial = () => {
    if (!testimonial.isShowing) {
      setTestimonial({copy: allCopy, linkCopy: '▲', isShowing: true})
      divCopy.current.innerText = allCopy
    } else {
      setTestimonial({
        copy: fragCopy,
        linkCopy: '▼',
        isShowing: false,
      })
      divCopy.current.innerText = fragCopy
    }
  }

  return (
    <li className="fade-item">
      <p
        ref={divCopy}
        className={`testimonial ${testimonial.isShowing ? 'showing' : ''}`}
        dangerouslySetInnerHTML={{__html: testimonial.copy}}
      />
      <span className="read-more" onClick={() => toggleTestimonial()}>
        {testimonial.linkCopy}
      </span>
      <span className="reporter">{reporter}</span>
    </li>
  )
})

export default Testimonial
