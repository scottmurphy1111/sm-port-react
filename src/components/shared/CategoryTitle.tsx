import {CSSProperties, useEffect, useRef} from 'react'

import {handleFadeIn} from './FadeItem/handleFadeIn'

interface CategoryTitleProps {
  title: string
  computedStyle: CSSProperties | undefined
}

const CategoryTitle = ({title, computedStyle}: CategoryTitleProps) => {
  const titleRef = useRef<null | HTMLHeadingElement>(null)

  useEffect(() => {
    handleFadeIn(titleRef)
  }, [])

  return (
    <h2 ref={titleRef} style={computedStyle}>
      {title}
    </h2>
  )
}

export default CategoryTitle
