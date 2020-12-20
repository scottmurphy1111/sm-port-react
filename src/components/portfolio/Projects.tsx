import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
// import Projects from './Projects';
import { getPanelOffset } from './getPanelOffset';
import Project from './Project';

const Projects = (params: any) => {
  const { projects } = useContext<any>(AppContext);
  const { title, projectsView } = projects;

  useEffect(() => {
    params.setProjectsOffset(getPanelOffset('.projects'))
  })

  return (
    <section
      className='projects sliding-panel container-fluid'
      data-section='projects'
    >
      <div className="wrap">
        <div className='row'>
          <div className='col-xs-12'>
            <h2 className='category-title'>{title}</h2>
            <ul className="projects">
              {projectsView.map((project: any, index: number) => (
                <li key={index}>
                  <Project project={project} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
