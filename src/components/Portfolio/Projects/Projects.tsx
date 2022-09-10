import {useAppContext} from 'common/context/useAppContext'
import {CategoryTitle} from 'components/shared/CategoryTitle'
import {FadeItem} from 'components/shared/FadeItem/FadeItem'
import {SeeNext} from 'components/shared/SeeNext/SeeNext'
import {useMonitorResize} from 'hooks/useMonitorResize'
import {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'
import {ProjectItem} from 'types/project-item'
import {getPanelOffset} from 'utils/getPanelOffset'

import {Project} from './Project'
import {ProjectsStyled} from './Projects.style'

interface SectionProps {
  setProjectsOffset: (val: number) => void
}

export const Projects = ({setProjectsOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, projectsItems} = state.projects

  const {isResizing} = useMonitorResize()

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.projects && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.projects, sectionRef])

  useEffect(() => {
    setProjectsOffset(getPanelOffset(sectionRef.current))
  }, [state.introAnimDone, isResizing])

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
                <CategoryTitle title={title} />
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
