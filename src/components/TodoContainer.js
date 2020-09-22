import React from 'react';
import TodoList from './TodoList'
import AddForm from './AddForm'
import { deleteTodo, fetchTodos, addTodo } from '../common/API';

class TodoContainer extends React.Component {
    state = {
        todos: []
    }

    componentWillMount() {
        fetchTodos()
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => {
                console.error(err.message);
            })

    }

    deleteTodo = (id) => {
        const reqData = {
            params: { id }
        }
        deleteTodo(reqData)
            .then(res => {
                const todos = this.state.todos.filter(todo => {
                    return todo.id !== id
                })
                this.setState({ todos: todos })
            })
            .catch(err => {
                console.error(err.message);
            })

    }

    addTodo = (todoObj) => {
        const reqData = { todo: todoObj.todo }
        addTodo(reqData)
            .then(res => {
                todoObj.id = res.data[0].pk
                const newTodos = [todoObj, ...this.state.todos]
                this.setState({ todos: newTodos })
            })
            .catch(err => {
                console.error(err.message);
            })

    }

    render() {
        return (
            <>
                <div className="todo-app container">
                    <h1 className="center blue-text">My Todo's</h1>
                    <AddForm addTodo={this.addTodo} />
                    <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
                </div>
            </>
        );
    }
}

export default TodoContainer;
