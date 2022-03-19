import FadeItem from 'components/shared/FadeItem/FadeItem'
import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import React, {CSSProperties, useEffect, useRef} from 'react'

interface ContactBlockProps {
  children: React.ReactElement[]
  computedStyle: CSSProperties | undefined
}

const ContactBlock = ({computedStyle, children}: ContactBlockProps) => {
  const contactBlockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    handleFadeIn(contactBlockRef)
  }, [])
  return (
    <div ref={contactBlockRef} className="contact-block" style={computedStyle}>
      {children}
    </div>
  )
}

export default ContactBlock
