import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react'
import { getPanelOffset } from './getPanelOffset';

const Testimonials = (params: any) => {
  const { testimonials } = useContext<any>(AppContext);
  const { title, testimonialsArray } = testimonials;

  useEffect(() => {
    params.setTestimonialsOffset(getPanelOffset('.testimonials-section'));
  }, [])
  
  return (
    <section className="testimonials-section section-panel container-fluid" data-section='testimonials'>
        <div className="wrap">
          <div className='row'>
            <div className='col-xs-12'>
              <h2 className='category-title'>{title}</h2>
              <ul className='testimonials'>
                {testimonialsArray.map((testimonial: any, id: number) => (
                  <li key={id + 1}>
                    <p className="testimonial">{testimonial.testimonial}</p>
                    <span className="reporter">{testimonial.reporter}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
