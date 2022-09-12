import {useFetchSoData} from 'hooks/useFetchSoData'
import React, {useEffect, useState} from 'react'
import {Social} from 'types/social'
import {StackOverflowData} from 'types/stack-overflow-data'

import {SoTooltipStyled} from './SoTooltip.style'
import {Trophy} from './Trophy'

interface SoTooltipProps {
  social: Social
  visible: boolean
  handleCloseTooltip: () => void
}

export const SoTooltip = React.memo(
  ({
    social,
    visible,
    handleCloseTooltip,
  }: // stackOverflowData,
  SoTooltipProps) => {
    const [soData, setSoData] = useState<StackOverflowData>({
      items: [
        {
          badge_counts: {
            bronze: 0,
            silver: 0,
            gold: 0,
          },
          reputation: 0,
        },
      ],
    })

    const {data: stackOverflowData, isFetched, isLoading} = useFetchSoData()

    useEffect(() => {
      if (stackOverflowData) setSoData(stackOverflowData)
    }, [visible, stackOverflowData])

    return (
      <SoTooltipStyled>
        <div
          className={`so-tooltip ${visible ? 'visible' : ''}`}
          onMouseLeave={handleCloseTooltip}
        >
          <div className="so-header-wrapper">
            <h3>Stack Overflow</h3>
            <p className="reputation" title="reputation">
              {isFetched && soData.items[0].reputation}
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
                    {isFetched && soData.items[0].badge_counts.bronze}
                  </li>
                  <li>
                    <Trophy level="silver" />
                    {isFetched && soData.items[0].badge_counts.silver}
                  </li>
                  <li>
                    <Trophy level="gold" />{' '}
                    {isFetched && soData.items[0].badge_counts.gold}
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
