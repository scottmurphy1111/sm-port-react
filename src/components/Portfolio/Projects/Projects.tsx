import SeeNext from 'components/shared/SeeNext/SeeNext'
import {ProjectItem} from 'models/project-item'
import React, {useContext, useEffect} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {AppContext} from '../../../App'
import {getPanelOffset} from '../../shared/getPanelOffset'
import Project from './Project'
import {ProjectsStyled} from './Projects.style'

interface SectionProps {
  setProjectsOffset: (val: number) => void
}

const Projects = ({setProjectsOffset}: SectionProps) => {
  const {projects} = useContext(AppContext)
  const {title, projectsView} = projects

  useEffect(() => {
    setProjectsOffset(getPanelOffset('.projects'))
  }, [setProjectsOffset])

  return (
    <SectionPanel light data-section="projects" className="projects">
      <ProjectsStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="category-title">{title}</h2>
              <ul className="projects-list">
                {projectsView.map((project: ProjectItem, index: number) => (
                  <li key={index} className="fade-item">
                    <Project {...project} />
                  </li>
                ))}
              </ul>
            </Col>
            <SeeNext section="about" light />
          </Row>
        </Grid>
      </ProjectsStyled>
    </SectionPanel>
  )
}

export default Projects
