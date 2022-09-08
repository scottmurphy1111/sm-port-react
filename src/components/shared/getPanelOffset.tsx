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
