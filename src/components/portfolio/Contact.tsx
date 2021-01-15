import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
import Socials from './Socials';

interface SectionProps {
  setContactOffset: (val: number) => void;
}

const Contact = ({setContactOffset}: SectionProps) => {
  const { contact } = useContext<any>(AppContext);
  const { title, contactTitle, socialTitle, socials } = contact;

  const loadContact = () => {
    const phone = '804.836.2326';
    const phoneDiv = document.querySelector('.insert-phone');
    const user = 'scottmurphy1111';
    const domain = 'gmail.com';
    const emailDiv = document.querySelector('.insert-email');

    if (phoneDiv) phoneDiv.innerHTML = `<a href="tel:${phone}">${phone || '804.836.2326'}</a>`;
    if (emailDiv) emailDiv.innerHTML = `<a target="_blank" href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  };

  useEffect(() => {
    loadContact();
  }, []);

  useEffect(() => {
    setContactOffset(getPanelOffset('.contact'));
  }, [setContactOffset]);

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
              <p>THANK YOU FOR VISITING MY SITE! TO PUT IT SIMPLY, I LOVE TO CODE.</p>
              <p>WHETHER I&rsquo;M DOING FREELANCE WORK OR EMBEDDED INTO A PRODUCTION TEAM, I FIND GREAT JOY IN CONQUERING THE CHALLENGES OF BRINGING USER EXPERIENCES TO LIFE.</p>
              <p><span className='white-text'>PLEASE CLICK BELOW </span>TO SEND ME A NOTE OR DROP ME A LINE.</p>
              <p>I LOOK FORWARD TO HEARING FROM YOU AND PARTNERING TOGETHER IN THE FUTURE.</p>
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
};

export default Contact;
