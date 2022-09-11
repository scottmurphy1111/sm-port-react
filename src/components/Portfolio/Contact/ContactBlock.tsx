import classNames from 'classnames'
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
  isDivider?: boolean
}

export const ContactBlock = ({
  computedstyle,
  children,
  isDivider,
}: ContactBlockProps) => {
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
    <div
      ref={contactBlockRef}
      className={classNames('contact-block', isDivider ? 'divider' : '')}
      style={computedstyle}
    >
      {addChildStyles(children)}
    </div>
  )
}
