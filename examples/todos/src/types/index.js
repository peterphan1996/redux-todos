import type { TodosState, TodosAction } from './todos'
import type { VisibilityFilterState, VisibilityFilterAction } from './visibilityFilter'

type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | TodosAction | VisibilityFilterAction;

export type Dispatch = ReduxDispatch<Action>;

export type State = TodosState & VisibilityFilterState
