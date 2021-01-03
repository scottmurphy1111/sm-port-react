import React, { useRef } from 'react'

const Testimonial = (params: any) => {
  const divCopy = useRef<any>(null)

  const allCopy = params.testimonial.testimonial;
  const fragCopy = allCopy.split(' ').slice(0, 7).join(' ');
  

  const showAll = () => {
    divCopy.current.innerText = allCopy;
  }


  return (
    <li className="fade-item">
      <p ref={divCopy} className="testimonial">{fragCopy}... <span className="read-more" onClick={() => showAll()}>Read More</span></p>
      <span className="reporter">{params.testimonial.reporter}</span>
    </li>
  )
}

export default Testimonial;
