import {useEffect, useState} from 'react'

import {ScreenSizes} from '../common/enum'

/**
 * @method useMediaMatcher
 * @param {string} size
 * @return {boolean}
 * uses viewport size (px value) and max/min-width to
 * determine a screen width range to watch for matches.
 * if current screen width matches range, returns true
 *
 * example of use in react component:
 *  {useMediaMatcher('md') && <div>Shows on mobile only</div>}
 */

export default function useMediaMatcher(size: keyof typeof ScreenSizes = 'md') {
  const media = ScreenSizes[size]
  const [match, setMatch] = useState(false)

  const buildMediaMatch = () => {
    return `(max-width: ${media}px)`
  }

  useEffect(() => {
    const mediaWatcher = window.matchMedia(buildMediaMatch())

    setMatch(mediaWatcher.matches)

    const handleSetMatches = (e: MediaQueryListEvent) => {
      console.log(e)
      setMatch(e.matches)
    }

    mediaWatcher.addEventListener('change', handleSetMatches)

    return () => {
      mediaWatcher.removeEventListener('change', handleSetMatches)
    }
  }, [window.matchMedia])

  return match
}
