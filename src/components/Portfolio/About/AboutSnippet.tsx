import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {CSSProperties, useEffect, useRef, useState} from 'react'
import {AboutItem} from 'types/about-item'

type Props = {
  item: AboutItem
  computedstyle?: CSSProperties
  openItem: AboutItem | null
  setOpenItem: React.Dispatch<React.SetStateAction<AboutItem | null>>
}

export const AboutSnippet = ({
  item,
  computedstyle,
  openItem,
  setOpenItem,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const aboutSnippetRef = useRef<null | HTMLDivElement>(null)
  const descriptionRef = useRef<null | HTMLDivElement>(null)

  const {heading, icon, description} = item

  useEffect(() => {
    handleFadeIn(aboutSnippetRef)
  }, [])

  const contentHeight = descriptionRef?.current?.scrollHeight

  const revealStyles = (open: boolean) => {
    return {
      height: open ? `${contentHeight}px` : '0px',
      opacity: open ? '1' : '0',
    }
  }

  useEffect(() => {
    setOpen(false)
    if (openItem === item) {
      setOpen(true)
    }
  }, [openItem])

  const revealContent = () => {
    openDrawer()
    revealText(descriptionRef?.current?.firstElementChild, description)
  }

  const openDrawer = () => {
    if (descriptionRef.current) {
      if (descriptionRef.current.firstElementChild?.textContent) {
        descriptionRef.current.firstElementChild.textContent = null
      }
      openItem !== item ? setOpenItem(item) : setOpenItem(null)
    }
  }

  const revealText = (div: Element | null | undefined, text: string) => {
    if (div && !open) {
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
      style={computedstyle}
      onClick={revealContent}
    >
      <div className="about-link">
        <img src={`${process.env.PUBLIC_URL}${icon}`} alt={`${heading}`} />
        <h3>{heading}</h3>
      </div>
      <div
        className="about-description"
        ref={descriptionRef}
        style={revealStyles(open)}
      >
        <p></p>
      </div>
    </div>
  )
}
