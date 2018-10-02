// @flow

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import type { State } from '../types/index'
import type { VisibilityFilter, Dispatch } from '../types'


type OwnPropsType = {
  filter: VisibilityFilter;
}

const mapStateToProps = (state: State, ownProps: OwnPropsType) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnPropsType) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
