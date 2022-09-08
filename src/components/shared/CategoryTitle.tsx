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
  computedStyle: CSSProperties | undefined
}

const CategoryTitle = ({title, computedStyle, align}: CategoryTitleProps) => {
  const titleRef = useRef<null | HTMLHeadingElement>(null)

  const textAlignment: CSSProperties = {
    textAlign: align,
  }

  const styles: CSSProperties = {
    ...computedStyle,
    ...textAlignment,
  }

  // console.log(`styles =  ${JSON.stringify(styles, null, 2)}`)
  useEffect(() => {
    handleFadeIn(titleRef)
  }, [])

  return (
    <h2 ref={titleRef} style={styles}>
      {title}
    </h2>
  )
}

export default CategoryTitle
