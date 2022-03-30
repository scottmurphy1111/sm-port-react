import {useAppContext} from 'common/context/useAppContext'
import CategoryTitle from 'components/shared/CategoryTitle'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import useMediaMatcher from 'hooks/useMediaMatcher'
import {Skillset} from 'models/skillset'
import {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {getPanelOffset} from '../../shared/getPanelOffset'
import {SkillsStyled} from './Skills.style'
import SkillsetItem from './SkillsetItem'

interface SectionProps {
  setSkillsOffset: (val: number) => void
}

const Skills = ({setSkillsOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, skillset} = state.skills

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.skills && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.skills, sectionRef])

  useEffect(() => {
    setSkillsOffset(getPanelOffset(sectionRef.current))
  }, [setSkillsOffset, sectionRef])

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
                    computedStyle={undefined}
                    align={useMediaMatcher() ? 'center' : 'left'}
                  />
                </FadeItem>
                <div className="skillset-wrapper">
                  <FadeItem>
                    {skillset?.map((skill: Skillset, id: number) => (
                      <SkillsetItem
                        key={id + 1}
                        skill={skill}
                        computedStyle={undefined}
                      />
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

export default Skills
