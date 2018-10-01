// @flow

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import type {Dispatch as ReduxDispatch} from 'redux';

type VisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  +filter: 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';
};

type TodosAction =
  | { type: 'ADD_TODO', +id: number, +text: Text }
  | { type: 'TOGGLE_TODO', +id: number };

type ReduxInitAction = { type: '@@INIT' };

type Action = ReduxInitAction | TodosAction | VisibilityFilterAction;

type Dispatch = ReduxDispatch<Action>;

type Props = {
  dispatch: Dispatch;
}

type State = {
  value: string
}

class AddTodo extends React.Component<Props, State> {
  state = {
    value: ''
  }

  input: HTMLInputElement;

  handleChange = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value
    })
  }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    if(!this.state.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.state.value));
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleSubmit} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
    )
  }

}

export default connect()(AddTodo)
