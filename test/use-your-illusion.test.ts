import { useSlash } from '../src/use-your-illusion'

describe('Sanity Check', () => {
  it('should be a function', () => {
    expect(useSlash).toBeInstanceOf(Function)
  })
})

describe('In React Context', () => {
  it('should rock', () => {
    const { rock } = useSlash()
    expect(rock).toBeInstanceOf(Function)
    expect(rock()).toEqual('🤘🏼')
  })
})
