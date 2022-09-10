import React from 'react'
import {Social} from 'types/social'
import {StackOverflowData} from 'types/stack-overflow-data'

import {SoTooltipStyled} from './SoTooltip.style'
import {Trophy} from './Trophy'

interface SoTooltipProps {
  social: Social
  visible: boolean
  handleCloseTooltip: () => void
  stackOverflowData: StackOverflowData
}

export const SoTooltip = React.memo(
  ({
    social,
    visible,
    handleCloseTooltip,
    stackOverflowData,
  }: SoTooltipProps) => {
    return (
      stackOverflowData && (
        <SoTooltipStyled>
          <div
            className={`so-tooltip ${visible ? 'visible' : ''}`}
            onMouseLeave={handleCloseTooltip}
          >
            <div className="so-header-wrapper">
              <h3>Stack Overflow</h3>
              <p className="reputation" title="reputation">
                {stackOverflowData.items[0].reputation}
              </p>
            </div>
            <div className="so-body-wrapper">
              <p>Badges</p>
              <ul style={{marginBottom: '24px'}}>
                <li>
                  <Trophy level="bronze" />{' '}
                  {stackOverflowData.items[0].badge_counts.bronze}
                </li>
                <li>
                  <Trophy level="silver" />{' '}
                  {stackOverflowData.items[0].badge_counts.silver}
                </li>
                <li>
                  <Trophy level="gold" />{' '}
                  {stackOverflowData.items[0].badge_counts.gold}
                </li>
              </ul>
              <a
                className="so-profile-link"
                target="_blank"
                rel="noopener noreferrer"
                href={social.link}
              >
                View My StackOverflow Profile
              </a>
            </div>
          </div>
        </SoTooltipStyled>
      )
    )
  }
)
