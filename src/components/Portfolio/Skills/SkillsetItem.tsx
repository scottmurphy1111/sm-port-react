import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import React, {useEffect, useRef} from 'react'
import {CSSProperties} from 'styled-components'

import {Skillset} from '../../../types/skillset'
import {FadeItem} from '../../shared/FadeItem/FadeItem'
import {SkillsArrayItem} from './SkillsArrayItem'

interface SkillsetItemProps {
  skill: Skillset
  computedstyle?: CSSProperties
}

export const SkillsetItem = React.memo(
  ({skill, computedstyle}: SkillsetItemProps) => {
    const skillsetRef = useRef(null)

    useEffect(() => {
      handleFadeIn(skillsetRef)
    }, [])
    return (
      <div ref={skillsetRef} className="skillset-item" style={computedstyle}>
        <div className="image-wrapper">
          <div className="image-container">
            <img
              alt="skills group"
              src={`${process.env.PUBLIC_URL}${skill.image}`}
            />
          </div>
        </div>

        <ul className="skills-array">
          <FadeItem>
            {skill.skillsArray.map((item: string) => (
              <SkillsArrayItem key={item} item={item} />
            ))}
          </FadeItem>
        </ul>
      </div>
    )
  }
)
