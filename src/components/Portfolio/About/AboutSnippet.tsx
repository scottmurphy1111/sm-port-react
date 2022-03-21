import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {AboutItem} from 'models/about-item'
import {useEffect, useRef, useState} from 'react'
import {CSSProperties} from 'styled-components'

interface AboutSnippetProps {
  item: AboutItem
  computedStyle: CSSProperties | undefined
}
44
const AboutSnippet = ({item, computedStyle}: AboutSnippetProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const aboutSnippetRef = useRef<null | HTMLDivElement>(null)
  const descriptionRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    handleFadeIn(aboutSnippetRef)
  }, [])

  const revealContent = () => {
    openDrawer()
    revealText(descriptionRef?.current?.firstElementChild, item.description)
  }

  const openDrawer = () => {
    setOpen((prev: boolean) => !prev)
    if (descriptionRef.current) {
      if (descriptionRef.current.firstElementChild?.textContent) {
        descriptionRef.current.firstElementChild.textContent = null
      }
      if (!open) {
        const contentHeight = descriptionRef.current.scrollHeight
        descriptionRef.current.style.height = `${contentHeight}px`
        descriptionRef.current.style.opacity = '1'
      } else {
        descriptionRef.current.style.height = '0px'
        descriptionRef.current.style.opacity = '0'
      }
    }
  }

  const revealText = (div: Element | null | undefined, text: string) => {
    if (div) {
      div.textContent += text[0]
      if (text.length > 1) {
        setTimeout(() => {
          revealText(div, text.slice(1))
        }, 12)
      }
    }
  }

  return (
    <div
      ref={aboutSnippetRef}
      className="about-snippet"
      style={computedStyle}
      onClick={revealContent}
    >
      <div className="about-link">
        <img
          src={`${process.env.PUBLIC_URL}${item.icon}`}
          alt={`${item.heading}`}
        />
        <h3>{item.heading}</h3>
      </div>
      <div className="about-description" ref={descriptionRef}>
        <p></p>
      </div>
    </div>
  )
}

export default AboutSnippet
