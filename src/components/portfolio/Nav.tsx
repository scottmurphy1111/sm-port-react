import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '../../assets/svgs';

export default function VertNav() {
  const [show, setShow] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const navItemsList = useRef<any>(null)
  const navButtonWrapper = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 5400);
  })
  const navItems = [
    {
      value: 'home',
      active: true
    },
    {
      value: 'skills',
      active: false
    },
    {
      value: 'projects',
      active: false
    },
    {
      value: 'about',
      active: false
    },
    {
      value: 'testimonials',
      active: false
    },
    {
      value: 'contact',
      active: false
    }
  ];

  const handleClick = ((e: any) => {
    const selectedNav = e.target.dataset.nav;
    const section: HTMLElement | null = document.querySelector(`[data-section=${selectedNav}`);
    const scrollPosition = section?.offsetTop;

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  })

  const handleNavButtonClick = () => {
    console.log('should open');
    setShowMobileMenu(true);
  }

  const documentClick = () => {

    document.addEventListener('click', (event) => {
      console.log('evennt target', event.target);
      console.log('is not UL', !navItemsList.current.contains(event.target));
      console.log('is not BUTTON', !navButtonWrapper.current.contains(event.target));
      if (!navItemsList.current.contains(event.target) && !navButtonWrapper.current.contains(event.target)) {
        console.log('should close', );
        setShowMobileMenu(false);
      } else {
        console.log('not target',);
      }
    })
  }

  useEffect(() => {
   documentClick();
  }, [])


  return (
    <div className={`nav ${show ? 'show' : ''}`}>
      <div className='container-fluid'>
        <div className="wrap">

          <div className='row'>
            <div className='col-xs-4 col-md-3'>
              <span className='logo' data-nav='home' onClick={handleClick}>
                <Logo />
              </span>
            </div>
            <div className='col-xs-8 col-md-6 col-md-offset-3 nav-wrapper'>
              <div ref={navButtonWrapper} className="nav-button-wrapper" onClick={() => handleNavButtonClick()}>
                <div className="nav-button"></div>
              </div>
              <ul ref={navItemsList} className="nav-items" data-active={showMobileMenu}>
                {
                  navItems.map((item: any, index: number) => {
                    if (index !== 0) {
                      return <li key={index} data-nav={item.value} onClick={handleClick}>{item.value}</li>
                    }
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
