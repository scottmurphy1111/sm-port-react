import {AppContext} from 'common/context/AppContext'
import {useAppContext} from 'common/context/useAppContext'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {ProjectItem} from 'models/project-item'
import React, {useContext, useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {getPanelOffset} from '../../shared/getPanelOffset'
import Project from './Project'
import {ProjectsStyled} from './Projects.style'

interface SectionProps {
  setProjectsOffset: (val: number) => void
}

const Projects = ({setProjectsOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, projectsItems} = state.projects

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.projects && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.projects, sectionRef])

  useEffect(() => {
    setProjectsOffset(getPanelOffset('.projects'))
  }, [setProjectsOffset])

  return (
    <SectionPanel
      light
      data-section="projects"
      className="projects"
      ref={sectionRef}
    >
      <ProjectsStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="category-title">{title}</h2>
              <ul className="projects-list">
                <FadeItem>
                  {projectsItems?.map((project: ProjectItem, index: number) => (
                    <Project key={index + 1} {...project} />
                  ))}
                </FadeItem>
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
