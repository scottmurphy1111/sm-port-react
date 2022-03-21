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
  computedStyle: CSSProperties | undefined
}

const ContactBlock = ({computedStyle, children}: ContactBlockProps) => {
  const contactBlockRef = useRef<HTMLDivElement | null>(null)

  const addChildStyles = (children: ReactElement | ReactElement[]) => {
    return React.Children.map(children, (child: ReactElement) => {
      child = cloneElement(child, {
        computedStyle: null,
      })

      return child
    })
  }

  useEffect(() => {
    handleFadeIn(contactBlockRef)
  }, [])
  return (
    <div ref={contactBlockRef} className="contact-block" style={computedStyle}>
      {addChildStyles(children)}
    </div>
  )
}

export default ContactBlock
