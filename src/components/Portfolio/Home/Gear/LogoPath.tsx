import React, {useEffect, useRef} from 'react'

interface LogoPathProps {
  el: string
  fill: string
  d: string
}

export const LogoPath = (props: LogoPathProps) => {
  const logoRef = useRef<null | SVGPathElement>(null)

  useEffect(() => {
    requestAnimationFrame(fade)
  }, [])

  let fadeStart: number, fadePrevTime: number
  let count = 0

  const fade = (timestamp: number) => {
    const logoRefEl = logoRef.current
    if (fadeStart === undefined) {
      fadeStart = timestamp
    }

    const elapsed = timestamp - fadeStart

    if (logoRefEl) {
      if (fadePrevTime !== timestamp && elapsed < 2400) {
        count = count > 1 ? 1 : count + 0.0125
        logoRefEl.style.opacity = `${count}`
      } else {
        count = count < 0 ? 0 : count - 0.05
        logoRefEl.style.opacity = `${count}`
      }
    }
    if (elapsed < 3600) {
      fadePrevTime = timestamp
      requestAnimationFrame(fade)
    }
  }

  return <path ref={logoRef} {...props} />
}
