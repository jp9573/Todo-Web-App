import React from 'react'

const TodoList = ({todos, deleteTodo}) => {
    const todosList = todos.length ? ( todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                <span>{todo.todo}</span>
            </div>
        )
    })) : (
        <p className="center">You have no todo's left!</p>
    )
    return (
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default TodoList