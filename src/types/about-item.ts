import {CSSProperties} from 'react'

export interface AboutItem {
  heading: string
  icon: string
  description: string
  computedStyle?: CSSProperties | undefined
}
