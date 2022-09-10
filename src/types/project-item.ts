import {CSSProperties} from 'react'

export interface ProjectItem {
  projectName: string
  link: string
  tech: string
  capabilities: string
  image: string
  description: string
  computedstyle?: CSSProperties
}
