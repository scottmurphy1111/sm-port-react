import {useAppContext} from 'common/context/useAppContext'
import CategoryTitle from 'components/shared/CategoryTitle'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {ProjectItem} from 'models/project-item'
import {useEffect, useRef} from 'react'
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
    setProjectsOffset(getPanelOffset(sectionRef.current))
  }, [setProjectsOffset, sectionRef])

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
              <FadeItem>
                <CategoryTitle title={title} computedStyle={undefined} />
              </FadeItem>
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
