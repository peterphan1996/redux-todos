// @flow

type Todo = {
  +id: number,
  +text: string;
  +completed: boolean
}

export type Todos = Array<Todo>;

export type TodosAction = | {type: 'ADD_TODO', id: number, text: string} | {type: 'TOGGLE_TODO', id: number}

const toggleTodo = (todos: Todos, id: number): Todos => todos.map(todo =>
    (todo.id === id)
      ? {...todo, completed: !todo.completed}
      : todo
  )


const todos = (state: Todos = [], action: TodosAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id)
    default:
      return state
  }
}

export default todos
