import React from 'react'

class AddForm extends React.Component {
    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type='text' onChange={this.handleChange} value={this.state.todo} required />
                </form>
            </div>
        )
    }
}

export default AddForm