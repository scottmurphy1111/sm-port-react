import {css} from 'styled-components'

export const ScreenSizes = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

interface MediaQueryProps {
  [key: string]: number
}

const sizes: MediaQueryProps = ScreenSizes

export const media: Record<
  keyof typeof sizes,
  (literals: TemplateStringsArray, ...placeholders: string[]) => string
> = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: string[]) =>
    css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(literals, ...placeholders)}
      }
    `.join('')

  return acc
}, {} as Record<keyof typeof sizes, (literals: TemplateStringsArray, ...placeholders: string[]) => string>)
