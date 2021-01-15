import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
import Testimonial from './Testimonial';
import { TestimonialItem } from 'models/testimonial-item';

interface SectionProps {
  setTestimonialsOffset: (val: number) => void;
  goToNextSection: (val: string) => void;
}

const Testimonials = ({setTestimonialsOffset, goToNextSection}: SectionProps) => {
  const { testimonials } = useContext<any>(AppContext);
  const { title, testimonialsArray } = testimonials;

  useEffect(() => {
    setTestimonialsOffset(getPanelOffset('.testimonials-section'));
  }, [setTestimonialsOffset]);

  return (
    <section className="testimonials-section section-panel container-fluid" data-section='testimonials'>
      <div className="wrap">
        <div className='row'>
          <div className='col-xs-12'>
            <h2 className='category-title'>{title}</h2>
            <ul className='testimonials'>
              {testimonialsArray.map((testimonial: TestimonialItem, id: number) => (
                <Testimonial key={id + 1} {...testimonial} />
              ))}
            </ul>
          </div>
          <div className='see-next' onClick={() => goToNextSection('contact')}>
            <img alt="see next" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more-black.svg`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
