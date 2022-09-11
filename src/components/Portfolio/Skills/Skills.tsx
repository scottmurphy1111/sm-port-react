import {CategoryTitle} from 'components/shared/CategoryTitle'
import {FadeItem} from 'components/shared/FadeItem/FadeItem'
import {SeeNext} from 'components/shared/SeeNext/SeeNext'
import {useAppContext} from 'context/useAppContext'
import {useMediaMatcher} from 'hooks/useMediaMatcher'
import {useMonitorResize} from 'hooks/useMonitorResize'
import {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'
import {Skillset} from 'types/skillset'
import {getPanelOffset} from 'utils/getPanelOffset'

import {SkillsStyled} from './Skills.style'
import {SkillsetItem} from './SkillsetItem'

interface SectionProps {
  setSkillsOffset: (val: number) => void
}

export const Skills = ({setSkillsOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, skillset} = state.skills

  const sectionRef = useRef(null)

  const {isResizing} = useMonitorResize()

  useEffect(() => {
    if (state.skills && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.skills, sectionRef])

  useEffect(() => {
    setSkillsOffset(getPanelOffset(sectionRef.current))
  }, [state.introAnimDone, isResizing])

  return (
    <>
      <SectionPanel data-section="skills" className="skills" ref={sectionRef}>
        <SkillsStyled>
          <Grid>
            <Row>
              <Col xs={12}>
                <FadeItem>
                  <CategoryTitle
                    title={title}
                    align={useMediaMatcher() ? 'center' : 'left'}
                  />
                </FadeItem>
                <div className="skillset-wrapper">
                  <FadeItem>
                    {skillset?.map((skill: Skillset, id: number) => (
                      <SkillsetItem key={id + 1} skill={skill} />
                    ))}
                  </FadeItem>
                </div>
              </Col>
              <SeeNext section="projects" />
            </Row>
          </Grid>
        </SkillsStyled>
      </SectionPanel>
    </>
  )
}
