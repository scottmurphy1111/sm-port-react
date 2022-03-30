import {fromEvent, Observable} from 'rxjs'
import {map} from 'rxjs/operators'

export function getPanelOffset(panel: HTMLDivElement | null): number {
  let offsetTop = 0
  if (panel) {
    offsetTop = panel.offsetTop
    // return offsetTop - 400
    return offsetTop
  } else {
    return 0
  }
}

// export function monitorScrolling$(panel: string): Observable<boolean> {
//   return fromEvent(window, 'scroll').pipe(
//     map(() => window.pageYOffset > getPanelOffset(panel))
//   )
// }
