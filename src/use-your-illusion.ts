// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export interface MusicMojo {
  rock(): string
}

/**
 * Summons the greatest rocker ever!
 */
export function useSlash(): MusicMojo {
  return {
    rock() {
      return '🤘🏼'
    }
  }
}
