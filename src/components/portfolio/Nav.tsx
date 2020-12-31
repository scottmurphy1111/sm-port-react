import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets/svgs';

export default function VertNav() {
  const [show, setShow] = useState(false);

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
      value: 'quotes',
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

  return (
    <div className={`nav ${show ? 'show' : ''}`}>
      <div className='container-fluid'>
        <div className="wrap">

          <div className='row'>
            <div className='col-xs-3'>
              <span className='logo' data-nav='home' onClick={handleClick}>
                <Logo />
              </span>
            </div>
            <div className='col-xs-5 col-xs-offset-4'>
              <ul>
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
