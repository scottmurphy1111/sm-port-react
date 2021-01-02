import React, { useEffect, useState } from 'react';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Testimonials from './Testimonials';

const Portfolio = () => {
  const [homeOffset, setHomeOffset] = useState(0);
  const [skillsOffset, setSkillsOffset] = useState(0);
  const [projectsOffset, setProjectsOffset] = useState(0);
  const [aboutOffset, setAboutOffset] = useState(0);
  const [testimonialsOffset, setTestimonialsOffset] = useState(0);
  const [contactOffset, setContactOffset] = useState(0);

  const navElements = Array.from(document.querySelectorAll('[data-nav]'));
  const keys = navElements.map(item => {
    return item.textContent ? item.textContent.toLowerCase() : 'home';
  });
  
  const navItems = navElements.reduce((acc: any, item: any, index) => {
    acc[keys[index]] = item;
    return acc;
  }, {})

  const setActive = ((active: any) => {
    navElements.forEach((item: any )=> {
      if (item.dataset.nav === active) {
        item.dataset.active = true;
      } else {
        item.dataset.active = false;
      }
    })
  })

  const getCurrentOffset = (pageOffset: any) => {
    if (homeOffset < pageOffset && skillsOffset > pageOffset) {
      navItems.active = 'home';
    } else if (skillsOffset < pageOffset && projectsOffset > pageOffset) {
      navItems.active = 'skills';
    } else if (projectsOffset < pageOffset && aboutOffset > pageOffset) {
      navItems.active = 'projects';
    } else if (aboutOffset < pageOffset && testimonialsOffset > pageOffset) {
      navItems.active = 'about';
    } else if (testimonialsOffset < pageOffset && contactOffset > pageOffset) {
      navItems.active = 'testimonials';
    } else {
      navItems.active = 'contact';
    }

    setActive(navItems.active);
  };

  const bgOverlay$ = new BehaviorSubject<any>(null);
  
  const monitorScrolling$ = () => fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    tap(value => {
      bgOverlay$.next(document.querySelector('.bg-overlay'));
      getCurrentOffset(value);     
    })
  );

  useEffect(() => {
   const subscription = monitorScrolling$().subscribe();
   return () => subscription.unsubscribe();
  });

  return (
    <>
      <Home
        setHomeOffset={setHomeOffset}
      />
      <Skills
        setSkillsOffset={setSkillsOffset}
      />
      <Projects
        setProjectsOffset={setProjectsOffset}
      />
      <About
        setAboutOffset={setAboutOffset}
      />
      <Testimonials 
        setTestimonialsOffset={setTestimonialsOffset}
      />
      <Contact
        setContactOffset={setContactOffset}
      />
    </>
  );
}

export default Portfolio;
