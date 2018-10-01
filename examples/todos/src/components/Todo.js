// @flow

import React from 'react'

type TodoType = {
  onClick: Function,
  completed: bool,
  text: string
}

const Todo = ({ onClick, completed, text }: TodoType) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
