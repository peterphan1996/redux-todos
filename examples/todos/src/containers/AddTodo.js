// @flow

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import type {Dispatch} from '../types';

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
