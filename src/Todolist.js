import React, { Component } from 'react';
import TodoForm from './todoForm.js';
import Todo from './Todo.js';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.newTodo = this.newTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    newTodo(newTodo){
        this.setState({todos: [ ...this.state.todos, newTodo ]});
    }
    removeTodo(key){
        this.setState({
            todos:  this.state.todos.filter(todo => todo.id !== key)
        })
    }
    render(){
        const todos = this.state.todos.map((todo) => 
            <Todo item={todo.task} key={todo.id} id={todo.id} remove={this.removeTodo} />)
        return(
            <div>
                <ul>
                    {todos}
                </ul>
                <TodoForm create={this.newTodo}/>
            </div>
        )
    }
}

export default Todolist;