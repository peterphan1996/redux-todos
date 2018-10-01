// @flow

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import type { State } from '../types/index'
import type { VisibilityFilter } from '../types/visibilityFilter'


// type stateType = TodosState & VisibilityFilterState

type OwnPropsType = {
  filter: VisibilityFilter;
}

const mapStateToProps = (state: State, ownProps: OwnPropsType) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
