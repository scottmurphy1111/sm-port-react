import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {CSSProperties, useCallback, useEffect, useRef, useState} from 'react'
import {Social} from 'types/social'

import {SoTooltip} from './SoTooltip'

interface SocialProp {
  social: Social
  computedstyle?: CSSProperties
}

export const SocialItem = ({social, computedstyle}: SocialProp) => {
  const [openTooltip, setOpenTooltip] = useState(false)
  const itemRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    handleFadeIn(itemRef)
  }, [])

  const handleOpenTooltip = useCallback(() => {
    setOpenTooltip(true)
  }, [])

  const handleCloseTooltip = useCallback(() => {
    setOpenTooltip(false)
  }, [])

  return (
    <div className="social-item" style={computedstyle} ref={itemRef}>
      <a
        title={social.title}
        className={social.title === 'Stack Overflow' ? 'so-link' : ''}
        target="_blank"
        rel="noopener noreferrer"
        href={social.link}
        onMouseEnter={handleOpenTooltip}
      >
        <img
          src={`${process.env.PUBLIC_URL}${social.icon}`}
          alt={social.title}
        />
      </a>

      {social.title === 'Stack Overflow' && openTooltip && (
        <SoTooltip
          social={social}
          visible={openTooltip}
          handleCloseTooltip={handleCloseTooltip}
        />
      )}
    </div>
  )
}
