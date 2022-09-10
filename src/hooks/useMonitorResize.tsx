import {useEffect, useState} from 'react'
import {fromEvent} from 'rxjs'
import {tap} from 'rxjs/operators'

export const useMonitorResize = () => {
  const resizeEvent$ = fromEvent(window, 'resize')
  const [isResizing, setIsResizing] = useState(false)

  const monitorResize$ = () =>
    resizeEvent$.pipe(
      tap(value => {
        setIsResizing(!!value)
      })
    )

  useEffect(() => {
    const subscription = monitorResize$().subscribe()
    return () => {
      subscription.unsubscribe()
      setIsResizing(false)
    }
  }, [isResizing])

  return {isResizing}
}
