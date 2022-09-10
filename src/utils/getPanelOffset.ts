export function getPanelOffset(panel: HTMLDivElement | null): number {
  return panel ? panel.offsetTop : 0
}
