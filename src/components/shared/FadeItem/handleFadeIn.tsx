import {RefObject} from 'react'

export const handleFadeIn = (elRef: RefObject<HTMLElement>) => {
  interface FadeStyles {
    opacity: number
    transform: string
  }

  const animateStyles: FadeStyles = {
    opacity: 1,
    transform: 'translateY(0px)',
  }

  const itemEl: HTMLElement | null = elRef?.current
  let visible = false

  function addStyles(target: HTMLElement, styles: FadeStyles) {
    Object.entries(styles).map(([key, value]) => {
      target.style[key as keyof FadeStyles] = value
    })
  }

  const observer = new IntersectionObserver(
    ([e]) => {
      if (!visible && (e as IntersectionObserverEntry).isIntersecting) {
        visible = true

        addStyles(e.target as HTMLElement, animateStyles)
      }
    },
    {rootMargin: '0px'}
  )

  if (itemEl) {
    observer.observe(itemEl)
  }

  return {visible}
}
