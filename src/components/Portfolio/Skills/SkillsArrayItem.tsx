import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import React, {useEffect, useRef} from 'react'
import {CSSProperties} from 'styled-components'

interface SkillsArrayItemProps {
  item: any
  computedStyle: CSSProperties | undefined
}

const SkillsArrayItem = ({item, computedStyle}: SkillsArrayItemProps) => {
  const skillsArrayItemRef = useRef(null)

  useEffect(() => {
    handleFadeIn(skillsArrayItemRef)
  }, [])

  return (
    <div ref={skillsArrayItemRef} style={computedStyle}>
      {item}
    </div>
  )
}

export default SkillsArrayItem
