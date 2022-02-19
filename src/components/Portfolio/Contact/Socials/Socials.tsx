import React, {useCallback, useEffect, useState} from 'react'

import {Social} from '../../../../models/social'
import SoTooltip from './SoTooltip'

const USER_ID = '5711949'

interface SocialsProps {
  data: Social[]
}

const Socials = ({data}: SocialsProps) => {
  const [openTooltip, setOpenTooltip] = useState(false)
  const [stackOverflowData, setStackOverflowData] = useState({
    reputation: 0,
    badge_counts: {bronze: 0, silver: 0, gold: 0},
  })

  const fetchStackOverflowData = async () => {
    const api_call = await fetch(
      `https://api.stackexchange.com/2.2/users/${USER_ID}/?site=stackoverflow`
    )
    const soData = await api_call.json()
    if (!soData.error_id) {
      setStackOverflowData(soData.items[0])
      return
    } else {
      console.error('Couldnt return Stack Overflow User Data', soData.error_id)
      return false
    }
  }

  const handleOpenTooltip = useCallback(() => {
    setOpenTooltip(true)
  }, [])

  const handleCloseTooltip = useCallback(() => {
    setOpenTooltip(false)
  }, [])

  useEffect(() => {
    fetchStackOverflowData()
  }, [])

  return (
    <ul>
      {data.map((social: Social, index: number) => (
        <li key={index}>
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
        </li>
      ))}
    </ul>
  )
}

export default Socials
