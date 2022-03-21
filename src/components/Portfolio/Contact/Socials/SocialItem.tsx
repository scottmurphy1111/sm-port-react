import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {Social} from 'models/social'
import {StackOverflowData} from 'models/stack-overflow-data'
import {CSSProperties, useCallback, useEffect, useRef, useState} from 'react'

import SoTooltip from './SoTooltip'

interface SocialProp {
  social: Social
  stackOverflowData: StackOverflowData
  computedStyle: CSSProperties | undefined
}

const SocialItem = ({social, computedStyle, stackOverflowData}: SocialProp) => {
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
    <div className="social-item" style={computedStyle} ref={itemRef}>
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
      {social.title === 'Stack Overflow' && (
        <SoTooltip
          social={social}
          visible={openTooltip}
          handleCloseTooltip={handleCloseTooltip}
          stackOverflowData={stackOverflowData}
        />
      )}
    </div>
  )
}

export default SocialItem
