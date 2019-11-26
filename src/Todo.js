import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(item){
        this.props.remove(this.props.id);
    }
    render(){
        return(
            <div>
            <li><span onClick={this.handleClick}>X</span> {this.props.item}</li>
            </div>
        )
    }
}

export default Todo;