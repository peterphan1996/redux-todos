import visibilityFilter from './visibilityFilter'

describe('visibilityFilter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual('SHOW_ALL')
  })

  it('should handle SHOW_ACTIVE', () => {
    expect(
      visibilityFilter("", {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      })
    ).toEqual("SHOW_ACTIVE")
  })

  it('should handle SHOW_COMPLETED', () => {
    expect(
      visibilityFilter("", {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED',
      })
    ).toEqual("SHOW_COMPLETED")
  })

})
