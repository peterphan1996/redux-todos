// @flow

import { VisibilityFilters } from '../actions'

import type {TodosAction} from './todos'

type VisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED'
};

type ReduxInitAction = { type: '@@INIT' };

type Action = TodosAction | VisibilityFilterAction | ReduxInitAction ;

const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: Action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
