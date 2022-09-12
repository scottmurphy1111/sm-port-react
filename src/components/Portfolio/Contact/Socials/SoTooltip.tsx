import {useAppContext} from 'context/useAppContext'
import {useFetchSoData} from 'hooks/useFetchSoData'
import React from 'react'
import {Social} from 'types/social'

import {SoTooltipStyled} from './SoTooltip.style'
import {Trophy} from './Trophy'

interface SoTooltipProps {
  social: Social
  visible: boolean
  handleCloseTooltip: () => void
}

export const SoTooltip = React.memo(
  ({social, visible, handleCloseTooltip}: SoTooltipProps) => {
    const {state} = useAppContext()
    const {isLoading, isFetched} = useFetchSoData()

    return (
      <SoTooltipStyled>
        <div
          className={`so-tooltip ${visible ? 'visible' : ''}`}
          onMouseLeave={handleCloseTooltip}
        >
          <div className="so-header-wrapper">
            <h3>Stack Overflow</h3>
            <p className="reputation" title="reputation">
              {isFetched && state.soData.items[0].reputation}
            </p>
          </div>
          <div className="so-body-wrapper">
            {isLoading ? (
              <div className="loading">Loading</div>
            ) : (
              <>
                <p>Badges</p>
                <ul style={{marginBottom: '24px'}}>
                  <li>
                    <Trophy level="bronze" />
                    {isFetched && state.soData.items[0].badge_counts.bronze}
                  </li>
                  <li>
                    <Trophy level="silver" />
                    {isFetched && state.soData.items[0].badge_counts.silver}
                  </li>
                  <li>
                    <Trophy level="gold" />{' '}
                    {isFetched && state.soData.items[0].badge_counts.gold}
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
              </>
            )}
          </div>
        </div>
      </SoTooltipStyled>
    )
  }
)
