import {useAppContext} from 'context/useAppContext'
import {useEffect, useRef, useState} from 'react'

import {GearStyled} from './Gear.style'
import {LogoPath} from './LogoPath'

export const Gear = () => {
  const [gearDone, setGearDone] = useState(false)
  const {dispatch} = useAppContext()
  const gearRef = useRef<null | SVGPathElement>(null)

  let spinStart: number, spinPrevTime: number

  const spin = (timestamp: number) => {
    if (spinStart === undefined) {
      spinStart = timestamp
    }

    const gearRefEl = gearRef.current
    const elapsed = timestamp - spinStart

    if (gearRefEl) {
      if (spinPrevTime !== timestamp) {
        const count = Math.min(0.1 * elapsed, 200)
        gearRefEl.style.transform = `rotateZ(${count}deg)`
        if (count === 360) setGearDone(true)
      }
    }

    if (elapsed < 2750) {
      spinPrevTime = timestamp
      !gearDone && requestAnimationFrame(spin)
    } else {
      dispatch({type: 'INTRO_ANIMATION_DONE', payload: true})
    }
  }

  useEffect(() => {
    requestAnimationFrame(spin)
  }, [])

  return (
    <GearStyled>
      <svg
        className="gear-icon"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 328 328"
      >
        <path
          ref={gearRef}
          className={'gear'}
          fill="#fff"
          d="M325.1,169c1-0.4,1.9-1.6,1.9-2.7c0,0,0-0.4,0-1.7c0-12.2-3.5-33.4-3.5-33.4c-0.2-1.1-1.2-2.1-2.3-2.2l-23.6-2.6
      c-1.1-0.1-2.3-1.1-2.6-2.1l-3.7-10.4c-0.4-1-0.1-2.5,0.6-3.3l16.3-17.9c0.7-0.8,0.9-2.3,0.3-3.2l-19.1-28.7c-0.7-0.9-2-1.3-3.1-0.9
      l-22.1,8.7c-1,0.4-2.5,0.1-3.3-0.7l-9.1-8.4c-0.8-0.7-1.3-2.2-1-3.2l6.1-23.3c0.3-1.1-0.3-2.4-1.2-3l-29.9-16.1
      c-1-0.5-2.4-0.2-3.1,0.7l-15.6,18.1c-0.7,0.8-2.2,1.3-3.2,1l-12.8-3.2c-1.1-0.2-2.2-1.3-2.4-2.4l-5.4-23.3c-0.2-1.1-1.3-2-2.4-2.1
      c0,0-10.5-0.9-16.9-0.9s-16.9,0.9-16.9,0.9c-1.1,0.1-2.2,1.1-2.4,2.1L139.3,28c-0.2,1.1-1.3,2.1-2.4,2.4L124,33.6
      c-1.1,0.3-2.5-0.1-3.2-1l-15.6-18.1c-0.7-0.8-2.1-1.1-3.1-0.7L72.3,30c-0.9,0.6-1.5,1.9-1.2,3l6.1,23.3c0.3,1.1-0.2,2.5-1,3.2
      L67,68c-0.8,0.8-2.3,1.1-3.3,0.7l-22.1-8.7c-1-0.4-2.4,0-3.1,0.9L19.4,89.5c-0.6,1-0.4,2.4,0.3,3.2l16.3,17.9
      c0.7,0.8,1,2.3,0.6,3.3l-3.7,10.4c-0.3,1-1.5,2-2.6,2.1L6.9,129c-1.1,0.1-2.1,1.1-2.3,2.2c0,0-3.5,21.3-3.5,33.4c0,1.2,0,1.7,0,1.7
      c0,1.1,0.9,2.3,1.9,2.7l22.8,8.3c1,0.4,2,1.6,2.1,2.7l1.3,9.2c0.2,1.1-0.4,2.5-1.3,3.1L8.1,205.5c-0.9,0.6-1.4,2-1,3L20.6,242
      c0.5,1,1.8,1.7,2.8,1.5l24.1-3.3c1.1-0.1,2.5,0.5,3.1,1.4l4.5,6.3c0.7,0.9,0.8,2.4,0.3,3.4l-11.4,21c-0.5,1-0.3,2.4,0.5,3.2
      l27.9,23.9c0.9,0.7,2.3,0.7,3.2,0l19.8-14.1c0.9-0.6,2.4-0.7,3.4-0.2l5.9,3c1,0.5,1.8,1.8,1.8,2.9l-0.3,24c0,1.1,0.8,2.3,1.9,2.6
      l36.1,8.6c1.1,0.2,2.4-0.5,2.9-1.4l11-21.6c0.5-1,1.8-1.8,2.9-1.7c0,0,1.4,0,3.1,0s3.1,0,3.1,0c1.1,0,2.4,0.7,2.9,1.7l11,21.6
      c0.5,1,1.8,1.6,2.9,1.4l36.1-8.6c1.1-0.3,1.9-1.5,1.9-2.6l-0.3-24c0-1.1,0.8-2.4,1.8-2.9l5.9-3c1-0.5,2.5-0.4,3.4,0.2l19.8,14.1
      c0.9,0.6,2.3,0.6,3.2,0l27.9-23.9c0.8-0.8,1-2.2,0.5-3.2l-11.4-21c-0.5-1-0.4-2.5,0.3-3.4l4.5-6.3c0.6-0.9,2-1.5,3.1-1.4l24.1,3.3
      c1.1,0.1,2.4-0.5,2.8-1.5l13.5-33.4c0.3-1-0.1-2.4-1-3l-19.8-13.3c-0.9-0.6-1.5-2-1.3-3.1l1.3-9.2c0.1-1.1,1.1-2.3,2.1-2.7
      L325.1,169z M164,264.2c-55.2,0-100-44.8-100-100c0-55.2,44.8-100,100-100s100,44.8,100,100C264,219.4,219.2,264.2,164,264.2z"
        />

        <LogoPath
          el={'left-bracket'}
          fill="#0080ff"
          d="M120.9,194.4h-4.8c-5.4,0-8.9-0.8-10.8-2.4c-1.8-1.6-2.8-4.8-2.8-9.6v-6.8c0-3.1-0.5-5.2-1.6-6.4c-1.1-1.1-3-1.7-5.9-1.7
      h-2c-0.2,0-0.3-0.1-0.3-0.3v-6.1c0-0.2,0.1-0.3,0.3-0.3h2c2.9,0,4.8-0.6,5.9-1.7c1.1-1.1,1.6-3.3,1.6-6.4v-6.8c0-4.7,0.9-8,2.8-9.6
      c1.9-1.6,5.4-2.4,10.8-2.4h4.8c0.2,0,0.3,0.1,0.3,0.3v6c0,0.2-0.1,0.3-0.3,0.3H117c-2.1,0-3.5,0.4-4.2,1.2c-0.7,0.8-1,2.7-1,5.7
      v6.6c0,3.5-0.5,6.1-1.6,7.5c-0.9,1.2-2.3,2-4.3,2.6c2,0.5,3.4,1.4,4.3,2.6c1.1,1.5,1.6,4,1.6,7.5v6.5c0,3,0.3,4.9,1,5.7
      c0.7,0.8,2.1,1.2,4.2,1.2h3.9c0.2,0,0.3,0.1,0.3,0.3v6.1C121.2,194.3,121.1,194.4,120.9,194.4z"
        />
        <LogoPath
          el={'ess'}
          fill="#fff"
          d="M144.6,183.8c-2,0-4-0.2-6-0.7c-2-0.4-4-1.1-5.8-2c-0.1-0.1-0.2-0.2-0.2-0.3v-7.6c0-0.1,0.1-0.2,0.2-0.3
      c0.1-0.1,0.2,0,0.3,0c2.1,1.4,4.1,2.4,6,3.1c1.9,0.7,3.9,1,5.7,1c1.9,0,3.3-0.4,4.3-1.2c1-0.8,1.5-1.8,1.5-3.2c0-1-0.3-1.9-1-2.7
      c-0.7-0.8-1.7-1.4-3-1.9l-3.9-1.4c0,0,0,0,0,0c-4-1.4-6.8-2.9-8.2-4.5c-1.5-1.6-2.2-3.8-2.2-6.5c0-3.5,1.2-6.2,3.6-8.2
      c2.4-2,5.7-3,9.8-3c1.9,0,3.7,0.2,5.6,0.6c1.8,0.4,3.7,1,5.5,1.7c0.1,0,0.2,0.2,0.2,0.3v7.2c0,0.1-0.1,0.2-0.2,0.3
      c-0.1,0.1-0.2,0.1-0.3,0c-1.7-1.1-3.4-1.9-5.1-2.5c-1.7-0.6-3.4-0.9-5.1-0.9c-1.8,0-3.3,0.3-4.2,1c-0.9,0.7-1.4,1.6-1.4,2.8
      c0,0.9,0.3,1.7,1,2.3c0.7,0.6,2.2,1.4,4.5,2.2l3.4,1.2c3.3,1.1,5.7,2.6,7.2,4.5c1.6,1.9,2.4,4.2,2.4,7.1c0,3.8-1.2,6.8-3.7,8.7
      C153.2,182.8,149.5,183.8,144.6,183.8z"
        />
        <LogoPath
          el={'emm'}
          fill="#fff"
          d="M195.8,183.1h-7.1c-0.2,0-0.3-0.1-0.3-0.3v-27.6l-4.3,14.7c0,0.1-0.2,0.2-0.3,0.2h-5.5c-0.1,0-0.3-0.1-0.3-0.2l-4.4-14.7
      v27.6c0,0.2-0.1,0.3-0.3,0.3h-7.1c-0.2,0-0.3-0.1-0.3-0.3v-37.2c0-0.2,0.1-0.3,0.3-0.3h9.8c0.1,0,0.3,0.1,0.3,0.2l4.7,15.3
      l4.6-15.3c0-0.1,0.2-0.2,0.3-0.2h9.9c0.2,0,0.3,0.1,0.3,0.3v37.2C196.1,182.9,196,183.1,195.8,183.1z"
        />
        <LogoPath
          el={'right-bracket'}
          fill="#0080ff"
          d="M211.8,194.4h-4.8c-0.2,0-0.3-0.1-0.3-0.3v-6.1c0-0.2,0.1-0.3,0.3-0.3h3.8c2.1,0,3.5-0.4,4.2-1.2c0.7-0.8,1.1-2.8,1.1-5.7
        v-6.5c0-3.6,0.5-6,1.6-7.5c0.9-1.2,2.3-2.1,4.2-2.6c-2-0.5-3.4-1.4-4.2-2.6c-1.1-1.5-1.6-3.9-1.6-7.5v-6.6c0-2.9-0.4-4.8-1.1-5.6
        c-0.7-0.8-2.1-1.2-4.2-1.2h-3.8c-0.2,0-0.3-0.1-0.3-0.3v-6c0-0.2,0.1-0.3,0.3-0.3h4.8c5.4,0,8.9,0.8,10.7,2.4
        c1.8,1.6,2.8,4.8,2.8,9.6v6.8c0,3.1,0.6,5.2,1.6,6.4c1.1,1.1,3.1,1.7,6,1.7h2c0.2,0,0.3,0.1,0.3,0.3v6.1c0,0.2-0.1,0.3-0.3,0.3h-2
        c-2.9,0-4.9,0.6-6,1.7c-1.1,1.2-1.6,3.3-1.6,6.4v6.8c0,4.7-0.9,8-2.8,9.6C220.7,193.6,217.2,194.4,211.8,194.4z"
        />
      </svg>
    </GearStyled>
  )
}
