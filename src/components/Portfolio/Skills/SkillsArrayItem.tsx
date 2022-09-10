import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import React, {useEffect, useRef} from 'react'
import {CSSProperties} from 'styled-components'

interface SkillsArrayItemProps {
  item: string
  computedstyle?: CSSProperties
}

export const SkillsArrayItem = ({
  item,
  computedstyle,
}: SkillsArrayItemProps) => {
  const skillsArrayItemRef = useRef(null)

  useEffect(() => {
    handleFadeIn(skillsArrayItemRef)
  }, [])

  return (
    <div ref={skillsArrayItemRef} style={computedstyle}>
      {item}
    </div>
  )
}
