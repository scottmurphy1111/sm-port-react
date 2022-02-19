import SeeNext from 'components/shared/SeeNext/SeeNext'
import React, {useContext, useEffect} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {AppContext} from '../../../App'
import {getPanelOffset} from '../../shared/getPanelOffset'
import {AboutStyled} from './About.style'

interface AboutItem {
  description: string
  heading: string
  icon: string
}

interface SectionProps {
  setAboutOffset: (val: number) => void
  isAbout: boolean
}

const hideShownContent = (content: HTMLElement | null) => {
  if (content) {
    content.classList.remove('show')
    content.style.height = '0px'
  }
}

const addText = (content: HTMLElement | null, text: string) => {
  if (content) {
    content.textContent += text[0]
    if (text.length > 1) {
      setTimeout(() => {
        addText(content, text.slice(1))
      }, 12)
    }
  }
}

const removeText = (content: HTMLElement | null | undefined) => {
  if (content) content.innerHTML = ''
}

const About = ({setAboutOffset, isAbout}: SectionProps) => {
  const {about} = useContext(AppContext)
  const {title, aboutSnippets} = about

  const getContent = (): string[] => {
    const els = Array.from(document.querySelectorAll('.about-description p'))
    return els.map(el => (el.textContent ? el.textContent : ''))
  }

  const textCollection = getContent()

  const appendExperience = () => {
    const expBio = document.querySelectorAll(
      '.about-snippets li .about-description'
    )[3]
    const calcDate = new Date().getFullYear() - 2009

    expBio.innerHTML = `<p>${calcDate} years+</p>`
  }

  const revealContent = (e: any, id: number) => {
    const description = e.target?.querySelector('.about-description')
    const shownContent: HTMLElement | null = document.querySelector(
      '.about-snippets li .about-description.show'
    )
    const currentCopy: HTMLParagraphElement | null | undefined =
      shownContent?.querySelector('p')

    if (!description) return
    if (description.classList.contains('show')) {
      hideAboutContent(shownContent, currentCopy)
    } else {
      showAboutContent(shownContent, description, id)
    }
  }

  const hideAboutContent = (
    shown: HTMLElement | null,
    current: HTMLElement | null | undefined
  ) => {
    hideShownContent(shown)
    if (current) removeText(current)
  }

  const showAboutContent = (
    shown: HTMLElement | null,
    description: HTMLElement,
    id: number
  ) => {
    hideShownContent(shown)
    description.classList.add('show')

    const showDiv: HTMLElement | null = document.querySelector(
      '.about-description.show p'
    )

    if (showDiv) {
      const height = showDiv.clientHeight
      description.style.height = height + 'px'
      if (textCollection) {
        removeText(showDiv)
        addText(showDiv, textCollection[id])
      }
    }
  }

  const initOpenItem = () => {
    setTimeout(() => {
      const clickEvent = document.createEvent('MouseEvent')
      clickEvent.initMouseEvent(
        'click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
      const element = document.querySelector('.about-snippets li')
      element?.dispatchEvent(clickEvent)
    }, 1400)
  }

  useEffect(() => {
    setAboutOffset(getPanelOffset('.about'))
    appendExperience()
  }, [setAboutOffset])

  useEffect(() => {
    if (isAbout) return initOpenItem()
  }, [isAbout])

  return (
    <SectionPanel data-section="about" className="about">
      <AboutStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="category-title">{title}</h2>
              <div className="about-items">
                <ul className="about-snippets">
                  {aboutSnippets.map((item: AboutItem, id: number) => (
                    <li
                      key={id}
                      className="fade-item"
                      onClick={(e: any) => revealContent(e, id)}
                    >
                      <div className="about-link">
                        <img
                          src={`${process.env.PUBLIC_URL}${item.icon}`}
                          alt={`${item.heading}`}
                        />
                        <h3>{item.heading}</h3>
                      </div>
                      <div className="about-description">
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <SeeNext section="testimonials" />
          </Row>
        </Grid>
      </AboutStyled>
    </SectionPanel>
  )
}

export default About
