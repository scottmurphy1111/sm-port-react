import {fromEvent, Observable} from 'rxjs'
import {map} from 'rxjs/operators'

export function getPanelOffset(panel: string): number {
  const section: HTMLElement | null = document.querySelector(panel)

  let offsetTop = 0
  if (section) {
    offsetTop = section.offsetTop
    return offsetTop - 400
  } else {
    return 0
  }
}

export function monitorScrolling$(panel: string): Observable<boolean> {
  return fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset > getPanelOffset(panel))
  )
}
