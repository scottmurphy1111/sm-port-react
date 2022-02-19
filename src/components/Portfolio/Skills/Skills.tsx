import SeeNext from 'components/shared/SeeNext/SeeNext'
import {Skillset} from 'models/skill'
import React, {useContext, useEffect} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {AppContext} from '../../../App'
import {getPanelOffset} from '../../shared/getPanelOffset'
import {SkillsStyled} from './Skills.style'

interface SectionProps {
  setSkillsOffset: (val: number) => void
}

const Skills = ({setSkillsOffset}: SectionProps) => {
  const {skills} = useContext(AppContext)
  const {title, skillset} = skills

  useEffect(() => {
    setSkillsOffset(getPanelOffset('.skills'))
  }, [setSkillsOffset])

  return (
    <SectionPanel data-section="skills" className="skills">
      <SkillsStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="category-title">{title}</h2>
              <ul className="skillset">
                {skillset.map((skill: Skillset, id: number) => (
                  <li key={id + 1} className="fade-item">
                    <div className="image-container">
                      <img
                        alt="skills group"
                        src={`${process.env.PUBLIC_URL}${skill.image}`}
                      />
                    </div>
                    <ul className="skills-array">
                      {skill.skillsArray.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Col>
            <SeeNext section="projects" />
          </Row>
        </Grid>
      </SkillsStyled>
    </SectionPanel>
  )
}

export default Skills
