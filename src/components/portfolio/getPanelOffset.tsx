import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

export function getPanelOffset(panel: string) {
  const section = document.querySelector(panel);
  
  if (section) {
    const panelOffset = (section as HTMLElement).offsetTop - 400;
    return panelOffset;
  } else {
    return 0;
  }  
}

export function monitorScrolling$(panel: string) {
  return fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset > getPanelOffset(panel))
  )
}