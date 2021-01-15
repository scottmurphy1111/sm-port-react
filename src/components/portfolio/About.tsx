import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';

interface AboutItem {
  description: string,
  heading: string,
  icon: string
}

interface SectionProps {
  setAboutOffset: (val: number) => void;
  goToNextSection: (val: string) => void;
}

const hideShownContent = (content: HTMLElement | null) => {
  if (content) {
    content.classList.remove('show');
    content.style.height = '0px';
  }
};

const addText = ((content: HTMLElement | null, text: string) => {
  if (content) {
    content.textContent += text[0];
    if (text.length > 1) {
      setTimeout(() => {
        addText(content, text.slice(1));
      }, 12);
    }
  }
});

const removeText = ((content: any) => {
  content.innerHTML = '';
});

const About = ({setAboutOffset, goToNextSection}: SectionProps) => {
  const { about } = useContext<any>(AppContext);
  const { title, aboutSnippets } = about;

  const getContent: any = () => {
    const els = Array.from(document.querySelectorAll('.about-description p'));
    return els.map(el => el.textContent);
  };

  const textCollection = getContent();

  const appendExperience = () => {
    const expBio = document.querySelectorAll('.about-snippets li .about-description')[3];
    const calcDate = new Date().getFullYear() - 2009;

    expBio.innerHTML = `<p>${calcDate} years+</p>`;
  };

  const revealContent = ((e: any, id: number) => {
    const description = e.target?.querySelector('.about-description');
    const shownContent: HTMLElement | null = document.querySelector('.about-snippets li .about-description.show');
    const currentCopy: HTMLParagraphElement | null | undefined = shownContent?.querySelector('p');

    if (!description) return;
    if (description.classList.contains('show')) {
      hideAboutContent(shownContent, currentCopy);
    } else {
      showAboutContent(shownContent, description, id);
    }
  });

  const hideAboutContent = (shown: HTMLElement | null, current: HTMLElement | null | undefined) => {
    hideShownContent(shown);
    removeText(current);
  };

  const showAboutContent = (shown: HTMLElement | null, description: HTMLElement, id: number) => {
    hideShownContent(shown);
    description.classList.add('show');

    const showDiv: HTMLElement | null = document.querySelector('.about-description.show p');

    if (showDiv) {
      const height = showDiv.clientHeight;
      description.style.height = height + 'px';
      if (textCollection) {
        removeText(showDiv);
        addText(showDiv, textCollection[id]);
      }
    }
  };

  useEffect(() => {
    setAboutOffset(getPanelOffset('.about'));
    appendExperience();
  }, [setAboutOffset]);

  return (
    <section
      className='about section-panel container-fluid'
      data-section='about'
    >
      <div className="wrap">
        <div className='row'>
          <div className='col-xs-12'>
            <h2 className='category-title'>{title}</h2>
            <div className="about-items">
              <ul className='about-snippets'>
                {aboutSnippets.map((item: AboutItem, id: number) => (
                  <li key={id} className="fade-item" onClick={(e: any) => revealContent(e, id)}>
                    <div className="about-link" >
                      <img src={`${process.env.PUBLIC_URL}${item.icon}`} alt={`${item.heading}`} />
                      <h3>{item.heading}</h3>
                    </div>
                    <div className="about-description">
                      <p>{item.description}</p>
                    </div>
                  </li>))}
              </ul>
            </div>
          </div>
          <div className='see-next' onClick={() => goToNextSection('testimonials')}>
            <img alt="see next" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more.svg`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;