import React, { Component } from "react";
import { connect } from 'react-redux'

class TodoList extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input value ={this.props.inputValue} onChange={this.props.inputChange}></input>
                <button onClick={this.props.addTodo}>提交</button>
                <ul>
                    <li>{this.props.list.length}</li>
                </ul>
            </div>
        );
    }
    
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const despathToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'input_change', 
                value: e.target.value
            }
            dispatch(action)
        },
        addTodo() {
            let action = {
                type: 'todo_add', 
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, despathToProps)(TodoList);
