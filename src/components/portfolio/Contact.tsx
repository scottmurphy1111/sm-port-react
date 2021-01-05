import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
import Socials from './Socials';

const Contact = (params: any) => {
  const { contact } = useContext<any>(AppContext);
  const { title, contactTitle, socialTitle, contactContent, socials } = contact;

  const loadContact = () => {
    const phone = '804.836.2326';
    const phoneDiv = document.querySelector('.insert-phone');
    const user = 'scottmurphy1111';
    const domain = 'gmail.com';
    const emailDiv = document.querySelector('.insert-email');

    phoneDiv!.innerHTML = `<a href="tel:${phone}">${phone || '804.836.2326'}</a>`;
    emailDiv!.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
  }

  useEffect(() => {
    loadContact();
  });

  useEffect(() => {
    params.setContactOffset(getPanelOffset('.contact'))
  }, [params])

  return (
    <section
      className='contact section-panel container-fluid'
      data-section='contact'
    >
      <div className="wrap">
        <div className='row'>
          <div className='col-xs-12'>
            <div className='special-note fade-item'>
              <h2 className='category-title'>{title}</h2>
              {
                contactContent.specialNote.map((note: string, index: number) => {
                  if (index === 2) {
                    return <span key={index} className="white-text">{note}&nbsp;</span>
                  } else {
                    return <><span key={index}>{note}</span></>
                  }
                  
                })
              }
            </div>
            <div className='block fade-item'>
              <h2 className='category-title'>
                {contactTitle}
              </h2>
              <div className='contact-info'>
                <ul>
                  <li className='insert-phone' />
                  <li className='insert-email' />
                </ul>
              </div>
            </div>
            <div className='block fade-item'>
              <h2 className='category-title'>
                {socialTitle}
              </h2>
              <div className='social'>
                <Socials data={socials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
