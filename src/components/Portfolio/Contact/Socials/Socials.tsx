import FadeItem from 'components/shared/FadeItem/FadeItem'
import {StackOverflowData} from 'models/stack-overflow-data'
import React, {useEffect, useState} from 'react'

import {Social} from '../../../../models/social'
import SocialItem from './SocialItem'

const USER_ID = '5711949'

interface SocialsProps {
  data: Social[]
}

const Socials = React.memo(({data}: SocialsProps) => {
  const [stackOverflowData, setStackOverflowData] = useState<StackOverflowData>(
    {
      reputation: 0,
      badge_counts: {bronze: 0, silver: 0, gold: 0},
    }
  )

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

  useEffect(() => {
    fetchStackOverflowData()
  }, [])

  return (
    <FadeItem>
      {data?.map((social: Social, index: number) => (
        <SocialItem
          key={index}
          social={social}
          computedStyle={undefined}
          stackOverflowData={stackOverflowData}
        />
      ))}
    </FadeItem>
  )
})

export default Socials
