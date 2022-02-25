import React, {useEffect, useState} from 'react'

import {SeeNextStyled} from './SeeNext.style'

interface SeeNextProps {
  section: string
  show?: boolean
  light?: boolean
}

const SeeNext = ({section, show, light}: SeeNextProps) => {
  const [nextSection, setNextSection] = useState(section)

  useEffect(() => {
    if (section) {
      setNextSection(section)
    }
  }, [section])

  const goToNextSection = () => {
    const nextSectionEl: HTMLElement | null = document.querySelector(
      `[data-section=${nextSection}`
    )
    const scrollPosition = nextSectionEl?.offsetTop

    window.scrollTo({top: scrollPosition, behavior: 'smooth'})
  }

  return (
    <SeeNextStyled>
      <div
        className={`see-next ${show ? 'show' : ''}`}
        onClick={() => goToNextSection()}
      >
        {light ? (
          <img
            alt="see next"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more-black.svg`}
          />
        ) : (
          <img
            alt="see next"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more.svg`}
          />
        )}
      </div>
    </SeeNextStyled>
  )
}

export default SeeNext
