import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {AboutItem} from 'models/about-item'
import React, {useEffect, useRef, useState} from 'react'
import {CSSProperties} from 'styled-components'

interface AboutSnippetProps {
  item: AboutItem
  id: number
  computedStyle: CSSProperties | undefined
}
44
const AboutSnippet = ({item, id, computedStyle}: AboutSnippetProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const aboutSnippetRef = useRef<null | HTMLDivElement>(null)
  const descriptionRef = useRef<null | HTMLDivElement>(null)

  // useEffect(() => {
  //   if (item) {
  //     appendExperience()
  //   }
  // }, [item])

  useEffect(() => {
    handleFadeIn(aboutSnippetRef)
  }, [])

  // const getContent = (): string[] => {
  //   const els = Array.from(document.querySelectorAll('.about-description p'))
  //   return els.map(el => (el.textContent ? el.textContent : ''))
  // }

  // const textCollection = getContent()

  // const appendExperience = () => {
  //   const calcDate = new Date().getFullYear() - 2009
  //   if (descriptionRef?.current?.firstChild?.textContent?.includes('years')) {
  //     descriptionRef.current.firstChild.textContent = `${calcDate} years+`
  //   }
  // }

  // const revealContent = (e: any, id: number) => {
  //   const description = e.target?.querySelector('.about-description')
  //   const shownContent: HTMLElement | null = document.querySelector(
  //     '.about-snippets li .about-description.show'
  //   )
  //   const currentCopy: HTMLParagraphElement | null | undefined =
  //     shownContent?.querySelector('p')

  //   if (!description) return
  //   if (description.classList.contains('show')) {
  //     hideAboutContent(shownContent, currentCopy)
  //   } else {
  //     showAboutContent(shownContent, description, id)
  //   }
  // }

  // const hideAboutContent = (
  //   shown: HTMLElement | null,
  //   current: HTMLElement | null | undefined
  // ) => {
  //   hideShownContent(shown)
  //   if (current) removeText(current)
  // }

  // const showAboutContent = (
  //   shown: HTMLElement | null,
  //   description: HTMLElement,
  //   id: number
  // ) => {
  //   hideShownContent(shown)
  //   description.classList.add('show')

  //   const showDiv: HTMLElement | null = document.querySelector(
  //     '.about-description.show p'
  //   )

  //   if (showDiv) {
  //     const height = showDiv.clientHeight
  //     description.style.height = height + 'px'
  //     if (textCollection) {
  //       removeText(showDiv)
  //       addText(showDiv, textCollection[id])
  //     }
  //   }
  // }

  // const hideShownContent = (content: HTMLElement | null) => {
  //   if (content) {
  //     content.classList.remove('show')
  //     content.style.height = '0px'
  //   }
  // }

  // const addText = (content: HTMLElement | null, text: string) => {
  //   if (content) {
  //     content.textContent += text[0]
  //     if (text.length > 1) {
  //       setTimeout(() => {
  //         addText(content, text.slice(1))
  //       }, 12)
  //     }
  //   }
  // }

  // const removeText = (content: HTMLElement | null | undefined) => {
  //   if (content) content.innerHTML = ''
  // }

  const revealContent = () => {
    // console.log(aboutSnippetRef)
    console.log(descriptionRef)
    // console.log(item)
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
    console.log(`text =  ${text}`)
    if (div) {
      div.textContent += text[0]
      if (text.length > 1) {
        setTimeout(() => {
          revealText(div, text.slice(1))
        }, 12)
      }
    }
  }

  /**
   * show clicked description
   *    open drawer
   *    split content, reveal one letter at a time
   * hide others
   *    close drawer
   *
   */
  return (
    <div
      ref={aboutSnippetRef}
      className="about-snippet"
      style={computedStyle}
      // onClick={(e: any) => revealContent(e, id)}
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
