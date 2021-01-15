import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '../../assets/svgs';

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

const documentClick = (navList: any, navButtonWrap: any, setShowMobile: any) => {
  document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !navButtonWrap.contains(event.target)) {
      setShowMobile(false);
    }
  });
};

const Nav = () => {
  const [show, setShow] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navItemsList = useRef<HTMLUListElement>(null);
  const navButtonWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3400);
  });  

  const handleClick = ((e: any) => {
    const selectedNav = e.target.dataset.nav;
    const section: HTMLElement | null = document.querySelector(`[data-section=${selectedNav}`);

    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
      setShowMobileMenu(false);
    }
  });

  const handleNavButtonClick = () => {
    setShowMobileMenu(true);
  };

  useEffect(() => {
    documentClick(navItemsList.current, navButtonWrapper.current, setShowMobileMenu);
  }, []);


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
            <div className='col-xs-8 col-md-8 col-md-offset-1 nav-wrapper'>
              <div ref={navButtonWrapper} className="nav-button-wrapper" onClick={() => handleNavButtonClick()}>
                <div className="nav-button"></div>
              </div>
              <ul ref={navItemsList} className="nav-items" data-active={showMobileMenu}>
                {
                  navItems.map((item: any, index: number) => {
                    if (index !== 0) {
                      return <li key={index} data-nav={item.value} onClick={handleClick}>{item.value}</li>;
                    } else {
                      return null;
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
};

export default Nav;
