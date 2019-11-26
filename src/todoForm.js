import React, { Component } from 'react';
import uuid from 'uuid';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuid() };
        this.props.create(newTodo);
        this.setState({
            task: ''
        })
    }
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add New Todo: 
                    <input
                        name="task"
                        type="text"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        )
    }
}
export default TodoForm;