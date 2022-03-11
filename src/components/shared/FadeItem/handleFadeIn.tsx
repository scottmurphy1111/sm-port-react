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

  function addStyles(
    target: any,
    styles: {opacity: number; transform: string}
  ) {
    Object.entries(styles).map(([key, value]) => {
      target.style[key] = value
    })
  }

  const observer = new IntersectionObserver(
    ([e]) => {
      // console.log(e)
      if (!visible && (e as IntersectionObserverEntry).isIntersecting) {
        visible = true
        // console.log(e.target)
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
