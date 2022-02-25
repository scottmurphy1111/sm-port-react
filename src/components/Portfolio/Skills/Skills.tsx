import {AppContext} from 'common/context/AppContext'
import {useAppContext} from 'common/context/useAppContext'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {Skillset} from 'models/skillset'
import React, {useContext, useEffect, useRef} from 'react'
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
    setSkillsOffset(getPanelOffset('.skills'))
  }, [setSkillsOffset])

  return (
    <>
      <SectionPanel data-section="skills" className="skills" ref={sectionRef}>
        <SkillsStyled>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2 className="category-title">{title}</h2>
                {/* <ul className="skillset"> */}
                <div className="skillset-wrapper">
                  <FadeItem>
                    {skillset?.map((skill: Skillset, id: number) => (
                      <SkillsetItem
                        key={id + 1}
                        skill={skill}
                        computedStyle={null}
                      />
                    ))}
                  </FadeItem>
                </div>
                {/* </ul> */}
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
