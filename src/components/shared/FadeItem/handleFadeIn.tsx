import {RefObject, useEffect, useState} from 'react'

export const handleFadeIn = (elRef: RefObject<HTMLElement>) => {
  // const [visible, setVisible] = useState(false)

  const animateStyles = {
    opacity: 1,
    transform: 'translateY(0px)',
  }

  // useEffect(() => {
  console.log('running obs')
  const itemEl: HTMLElement | null = elRef?.current
  let visible = false

  console.log('itemel', itemEl)
  function addStyles(target: any, styles: any) {
    Object.entries(styles).map(([key, value]) => {
      target.style[key] = value
    })
  }

  // function loopChilds(target: any) {
  //   for (let i = 0; i < target.childNodes.length; i++) {
  //     const child = target.childNodes[i]
  //     if (!visible && child instanceof HTMLElement) {
  //       console.log(child)
  //       loopChilds(child)
  //       addStyles(child, animateStyles)
  //     }
  //   }
  // }

  const observer = new IntersectionObserver(
    ([e]) => {
      // console.log(e)
      // console.log(`visible = ${visible}`)
      // console.log(`e.intersectionRatio =  ${e.intersectionRatio}`)
      if (!visible && (e as IntersectionObserverEntry).isIntersecting) {
        console.log('is visible')
        // loopChilds(e.target)
        // setVisible(true)
        visible = true
        addStyles(e.target, animateStyles)
      }
    },
    {rootMargin: '0px'}
  )

  if (itemEl) {
    observer.observe(itemEl)
  }

  return {visible}

  // return () => {
  //   if (itemEl) {
  //     observer.unobserve(itemEl)
  //   }
  // }
  // }, [elRef])
}
