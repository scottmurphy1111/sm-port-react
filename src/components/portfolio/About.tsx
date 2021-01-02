import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';

interface AboutItem {
  description: string,
  heading: string,
  icon: string
}

const hideShownContent = (content: any) => {
  if (content) {
    content.classList.remove('show');
    (content as HTMLElement).style.height = '0px';
  }
}

const addText = ((content: any, text: string) => {
  content.textContent += text[0];
  if (text.length > 1) {
    setTimeout(() => {
      addText(content, text.slice(1))
    }, 12)
  }
});

const removeText = ((content: any) => {
  content.innerHTML = '';
})

const About = (params: any) => {
  const { about } = useContext<any>(AppContext);
  const { title, aboutSnippets } = about;

  const getContent: any = () => {
    const els = Array.from(document.querySelectorAll('.about-description p'));
    const text = els.map(el => el.textContent);

    return text;
  };

  const textCollection = getContent();

  const appendExperience = () => {
    const expBio = document.querySelectorAll('.about-snippets li .about-description')[3];
    let calcDate = new Date().getFullYear() - 2009;

    expBio.innerHTML = `<p>${calcDate} years+</p>`;
  }

  const revealContent = ((e: any, id: number) => {
    let description = e.target.querySelector('.about-description');
    let shownContent = document.querySelector('.about-snippets li .about-description.show');
    let currentCopy = shownContent?.querySelector('p')

    if (!description) return;
    if (description.classList.contains('show')) {

      hideShownContent(shownContent);
      removeText(currentCopy)
    } else {
      hideShownContent(shownContent);
      description.classList.add('show');

      let showDiv = document.querySelector('.about-description.show p');

      if (showDiv !== null) {
        let height = showDiv.clientHeight;
        (description as HTMLElement).style.height = height + 'px';
        if (textCollection) {
          removeText(showDiv)
          addText(showDiv, textCollection[id])
        }
      }
    }
  });

  useEffect(() => {
    params.setAboutOffset(getPanelOffset('.about'));
    appendExperience();
  })


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
                  <li key={id} onClick={(e) => revealContent(e, id)}>
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
        </div>
      </div>
    </section>
  );
}

export default About;