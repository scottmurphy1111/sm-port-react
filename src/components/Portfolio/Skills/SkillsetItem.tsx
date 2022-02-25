import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import React, {forwardRef, useEffect, useRef} from 'react'

import {Skillset} from '../../../models/skillset'
import FadeItem from '../../shared/FadeItem/FadeItem'
import SkillsArrayItem from './SkillsArrayItem'

interface SkillsetItemProps {
  skill: Skillset
  computedStyle: any
}

const SkillsetItem = React.memo(({skill, computedStyle}: SkillsetItemProps) => {
  const skillsetRef = useRef(null)

  useEffect(() => {
    handleFadeIn(skillsetRef)
  }, [])
  return (
    <div className="skillset-item" style={computedStyle} ref={skillsetRef}>
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
            // <li key={item} ref={skillsArrayItemRef}>
            //   {item}
            // </li>
            <SkillsArrayItem key={item} item={item} computedStyle={null} />
          ))}
        </FadeItem>
      </ul>
    </div>
  )
})

export default SkillsetItem
