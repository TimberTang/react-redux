import React, { Component } from "react";
import store from './store/index'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() {
        return (
            <div>
                <input value ={this.state.inputValue}></input>
                <button>提交</button>
                <ul>
                    <li>timber</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;
