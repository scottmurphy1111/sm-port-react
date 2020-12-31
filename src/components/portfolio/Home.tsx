import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { getPanelOffset } from './getPanelOffset';
import { Gear } from '../../assets/svgs';

const Home = (params: any) => {
  const { home } = useContext<any>(AppContext);
  const { name, subHeadingA, subHeadingB } = home;
  const [show, setShow] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const disableScroll = () => {
    const body = document.body;
    return scrollable ? body.style.overflow = 'visible' : body.style.overflow = 'hidden';
  };

  const clickSeeMore = () => {
    const section: HTMLElement | null = document.querySelector(`[data-section=skills`);
    const scrollPosition = section?.offsetTop;

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  useEffect(() => {
    params.setHomeOffset(getPanelOffset('.home'));
    disableScroll()

    setTimeout(() => {
      setShow(true);
      setScrollable(true);
    }, 4750);
  }, [scrollable]);

  return (
    <section
      className='home section-panel container-fluid'
      data-section='home'
    >
      <div className="wrap">
        <div className='row'>
          <div className='col-xs-12'>
            <div className='panel-static'>
              <div className='static-inner'>
                <Gear />
                <div className={`copy-block ${show ? "show" : ""}`}>
                  <h1>
                    <span className='name show'>
                      {name}
                    </span>
                  </h1>
                  <p className='tagline show'>
                    {subHeadingA + ' '}
                    <br className='mobile-only' />
                    {subHeadingB}
                  </p>
                </div>
              </div>
            </div>
            <div className={`see-more ${show ? "show" : ""}`} onClick={clickSeeMore}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more.svg`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;