let defaultState = {
  todos: []
}
export default function manageTodo(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) };

    default:
      return state;
  }
}
