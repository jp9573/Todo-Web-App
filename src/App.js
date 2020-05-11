import React from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class App extends React.Component {
  state = {
    todos: [
      { content: "Buy some milk", id: 1 },
      { content: "Play pubg", id: 2 }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1
    const newTodos = [...this.state.todos, todo]
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">My Todo's</h1>
        <AddForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
