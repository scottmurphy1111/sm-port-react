import React, { useEffect, useState } from 'react';
import Home from './portfolio/Home';
import Projects from './portfolio/Projects';
import Skills from './portfolio/Skills';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Testimonials from './portfolio/Testimonials';

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
  }, {});

  const setActive = ((active: any) => {
    navElements.forEach((item: any) => {
      if (item.dataset.nav === active) {
        item.dataset.active = true;
      } else {
        item.dataset.active = false;
      }
    });
  });

  const skillsFadeItems = document.querySelectorAll('.skills .fade-item');
  const projectsFadeItems = document.querySelectorAll('.projects .fade-item');
  const aboutFadeItems = document.querySelectorAll('.about .fade-item');
  const testimonialsFadeItems = document.querySelectorAll('.testimonials-section .fade-item');
  const contactFadeItems = document.querySelectorAll('.contact .fade-item');

  const fadeInItems = (fadeableItems: any) => {
    fadeableItems.forEach((element: any, index: number) => {
      element.style.opacity = 1;
      element.style.transitionDelay = `${index * 0.15}s`;
      element.style.transform = 'translate(0)';
    });
  };

  const getCurrentOffset = (pageOffset: any) => {
    if (homeOffset < pageOffset && skillsOffset > pageOffset) {
      navItems.active = 'home';
    } else if (skillsOffset < pageOffset && projectsOffset > pageOffset) {
      navItems.active = 'skills';
      fadeInItems(skillsFadeItems);
    } else if (projectsOffset < pageOffset && aboutOffset > pageOffset) {
      navItems.active = 'projects';
      fadeInItems(projectsFadeItems);
    } else if (aboutOffset < pageOffset && testimonialsOffset > pageOffset) {
      navItems.active = 'about';
      fadeInItems(aboutFadeItems);
    } else if (testimonialsOffset < pageOffset && contactOffset > pageOffset) {
      navItems.active = 'testimonials';
      fadeInItems(testimonialsFadeItems);
    } else {
      navItems.active = 'contact';
      fadeInItems(contactFadeItems);
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

  const goToNextSection = (section: any) => {
    const nextSection: HTMLElement | null = document.querySelector(`[data-section=${section}`);
    const scrollPosition = nextSection?.offsetTop;

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  useEffect(() => {
    const subscription = monitorScrolling$().subscribe();
    return () => subscription.unsubscribe();
  });

  return (
    <>
      <Home
        setHomeOffset={setHomeOffset} goToNextSection={goToNextSection}
      />
      <Skills
        setSkillsOffset={setSkillsOffset} goToNextSection={goToNextSection}
      />
      <Projects
        setProjectsOffset={setProjectsOffset} goToNextSection={goToNextSection}
      />
      <About
        setAboutOffset={setAboutOffset} goToNextSection={goToNextSection}
      />
      <Testimonials
        setTestimonialsOffset={setTestimonialsOffset} goToNextSection={goToNextSection}
      />
      <Contact
        setContactOffset={setContactOffset}
      />
    </>
  );
};

export default Portfolio;
