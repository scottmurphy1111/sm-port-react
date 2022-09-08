import React from 'react'
import {Social} from 'types/social'
import {StackOverflowData} from 'types/stack-overflow-data'

import {SoTooltipStyled} from './SoTooltip.style'
import Trophy from './Trophy'

interface SoTooltipProps {
  social: Social
  visible: boolean
  handleCloseTooltip: () => void
  stackOverflowData: StackOverflowData
}

const SoTooltip = React.memo(
  ({
    social,
    visible,
    handleCloseTooltip,
    stackOverflowData,
  }: SoTooltipProps) => {
    const {reputation, badge_counts} = stackOverflowData

    return (
      <SoTooltipStyled>
        <div
          className={`so-tooltip ${visible ? 'visible' : ''}`}
          onMouseLeave={handleCloseTooltip}
        >
          <div className="so-header-wrapper">
            <h3>Stack Overflow</h3>
            <p className="reputation" title="reputation">
              {reputation}
            </p>
          </div>
          <div className="so-body-wrapper">
            <p>Badges</p>
            <ul style={{marginBottom: '24px'}}>
              <li>
                <Trophy level="bronze" /> {badge_counts.bronze}
              </li>
              <li>
                <Trophy level="silver" /> {badge_counts.silver}
              </li>
              <li>
                <Trophy level="gold" /> {badge_counts.gold}
              </li>
            </ul>
            <a
              className="so-profile-link"
              target="_blank"
              rel="noopener noreferrer"
              href={social.link}
            >
              View My SO Profile
            </a>
          </div>
        </div>
      </SoTooltipStyled>
    )
  }
)

export default SoTooltip
