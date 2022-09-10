import {CSSProperties, useEffect, useRef} from 'react'

import {handleFadeIn} from './FadeItem/handleFadeIn'

interface CategoryTitleProps {
  title: string
  align?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
  computedstyle?: CSSProperties
}

export const CategoryTitle = ({
  title,
  computedstyle,
  align,
}: CategoryTitleProps) => {
  const titleRef = useRef<null | HTMLHeadingElement>(null)

  const textAlignment: CSSProperties = {
    textAlign: align,
  }

  const styles: CSSProperties = {
    ...computedstyle,
    ...textAlignment,
  }

  useEffect(() => {
    handleFadeIn(titleRef)
  }, [])

  return (
    <h2 ref={titleRef} style={styles}>
      {title}
    </h2>
  )
}
