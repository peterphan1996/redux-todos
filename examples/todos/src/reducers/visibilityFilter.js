// @flow

import { VisibilityFilters } from '../actions'

import type {Action} from '../types'

const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: Action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
