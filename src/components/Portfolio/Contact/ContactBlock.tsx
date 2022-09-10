import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import React, {
  cloneElement,
  CSSProperties,
  ReactElement,
  useEffect,
  useRef,
} from 'react'

interface ContactBlockProps {
  children: ReactElement | ReactElement[]
  computedstyle?: CSSProperties
}

export const ContactBlock = ({computedstyle, children}: ContactBlockProps) => {
  const contactBlockRef = useRef<HTMLDivElement | null>(null)

  const addChildStyles = (children: ReactElement | ReactElement[]) => {
    return React.Children.map(children, (child: ReactElement) => {
      child = cloneElement(child, {
        computedstyle: null,
      })

      return child
    })
  }

  useEffect(() => {
    handleFadeIn(contactBlockRef)
  }, [])

  return (
    <div ref={contactBlockRef} className="contact-block" style={computedstyle}>
      {addChildStyles(children)}
    </div>
  )
}
