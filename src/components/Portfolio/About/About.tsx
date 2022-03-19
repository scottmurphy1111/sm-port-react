import {useAppContext} from 'common/context/useAppContext'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import SeeNext from 'components/shared/SeeNext/SeeNext'
import {AboutItem} from 'models/about-item'
import {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {getPanelOffset} from '../../shared/getPanelOffset'
import {AboutStyled} from './About.style'
import AboutSnippet from './AboutSnippet'

interface SectionProps {
  setAboutOffset: (val: number) => void
  isAbout: boolean
}

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

const About = ({setAboutOffset, isAbout}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, aboutItems} = state.about

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.about && sectionRef) {
      // console.log(sectionRef)
      // console.log(state.about)
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
      // console.log(state.sectionRefs)
    }
  }, [state.about, sectionRef])

  // const aboutDescriptionRefs = useRef<HTMLDivElement[]>([])
  // aboutDescriptionRefs.current = []

  // const addToRefs = (el: HTMLDivElement) => {
  //   if (el && !aboutDescriptionRefs?.current.includes(el)) {
  //     aboutDescriptionRefs.current.push(el)
  //   }
  // }

  // useEffect(() => {
  //   if (about) {
  //     // appendExperience()
  //   }
  // }, [about])

  // const getContent = (): string[] => {
  //   const els = Array.from(document.querySelectorAll('.about-description p'))
  //   return els.map(el => (el.textContent ? el.textContent : ''))
  // }

  // const textCollection = getContent()

  // const appendExperience = () => {
  //   const calcDate = new Date().getFullYear() - 2009
  //   if (aboutDescriptionRefs?.current[3]?.firstChild?.textContent) {
  //     aboutDescriptionRefs.current[3].firstChild.textContent = `${calcDate} years+`
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
    }, 700)
  }

  useEffect(() => {
    setAboutOffset(getPanelOffset('.about'))
  }, [setAboutOffset])

  useEffect(() => {
    if (isAbout) return initOpenItem()
  }, [isAbout])

  return (
    <SectionPanel data-section="about" className="about" ref={sectionRef}>
      <AboutStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="category-title">{title}</h2>
              <div className="about-items">
                {/* <ul className="about-snippets"> */}
                <FadeItem>
                  {aboutItems?.map((item: AboutItem, id: number) => (
                    <AboutSnippet
                      key={`${id}`}
                      item={item}
                      id={id}
                      computedStyle={undefined}
                    />
                  ))}
                </FadeItem>
                {/* </ul> */}
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
