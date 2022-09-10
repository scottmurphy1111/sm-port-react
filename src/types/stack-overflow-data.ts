export interface StackOverflowData {
  items: {
    badge_counts: BadgeCounts
    reputation: number
  }[]
}

export interface BadgeCounts {
  bronze: number
  silver: number
  gold: number
}
