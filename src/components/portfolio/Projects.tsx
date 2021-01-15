import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
import Project from './Project';
import { ProjectItem } from 'models/project-item';

interface SectionProps {
  setProjectsOffset: (val: number) => void;
  goToNextSection: (val: string) => void;
}

const Projects = ({setProjectsOffset, goToNextSection}: SectionProps) => {
  const { projects } = useContext<any>(AppContext);
  const { title, projectsView } = projects;

  useEffect(() => {
    setProjectsOffset(getPanelOffset('.projects'));
  }, [setProjectsOffset]);

  return (
    <section
      className='projects section-panel container-fluid'
      data-section='projects'
    >
      <div className="wrap">
        <div className='row'>
          <div className='col-xs-12'>
            <h2 className='category-title'>{title}</h2>
            <ul className="projects">
              {projectsView.map((project: ProjectItem, index: number) => (
                <li key={index} className="fade-item">
                  <Project {...project} />
                </li>
              ))}
            </ul>
          </div>
          <div className='see-next' onClick={() => goToNextSection('about')}>
            <img alt="see next" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more-black.svg`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
