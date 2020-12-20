import React, { createContext, useEffect } from 'react';
import data from './data/data.json';
import Nav from './components/portfolio/Nav';
import Portfolio from './components/portfolio/Portfolio';
import BgImage from './components/portfolio/BgImage';

export const appData = {
  home: data.panels.home,
  skills: data.panels.skills,
  projects: data.panels.projects,
  about: data.panels.about,
  testimonials: data.panels.testimonials,
  contact: data.panels.contact
}

export const AppContext = createContext(appData);

const App = () => {
  const resetPage = () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    resetPage();
  }, [])

  return (
    <AppContext.Provider value={appData}>
      <Nav />
      <Portfolio />
      <BgImage />
    </AppContext.Provider>
  );
}

export default App;
