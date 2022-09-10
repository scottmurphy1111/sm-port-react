import {FadeItem} from 'components/shared/FadeItem/FadeItem'
import React from 'react'

import {Social} from '../../../../types/social'
import {SocialItem} from './SocialItem'

interface SocialsProps {
  data: Social[]
}

export const Socials = React.memo(({data}: SocialsProps) => (
  <FadeItem>
    {data?.map((social: Social, index: number) => (
      <SocialItem key={index} social={social} />
    ))}
  </FadeItem>
))
