import React, { useRef } from 'react';
import { TestimonialItem } from '../../models/testimonial-item';


const Testimonial = ({copy, reporter}: TestimonialItem) => {
  const divCopy = useRef<any>(null);

  const allCopy = copy;
  const fragCopy = allCopy.split(' ').slice(0, 7).join(' ');
  

  const showAll = () => {
    divCopy.current.innerText = allCopy;
  };


  return (
    <li className="fade-item">
      <p ref={divCopy} className="testimonial">{fragCopy}... <span className="read-more" onClick={() => showAll()}>Read More</span></p>
      <span className="reporter">{reporter}</span>
    </li>
  );
};

export default Testimonial;
