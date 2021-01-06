import React, { Component } from "react";
import store from "./store";
import {
    changeInputAction,
    deleteItemAction,
    addItemAction,
    // getTodoListActon
    getTodoList
} from "./store/actionCreaters.js";
import TodoListUI from "./TodoListUI";
// import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChagee = this.storeChagee.bind(this);
        store.subscribe(this.storeChagee);
        this.deleItem = this.deleItem.bind(this);
    }

    componentDidMount () {
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((error) => {
        //     // test
        //     // console.log(error);
        //     const data = [
        //         '八点开会',
        //         '九点沟通',
        //         '写代码'
        //     ]
        //     const action = getTodoListActon(data)
        //     store.dispatch(action)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addTodo={this.addTodo}
                list={this.state.list}
                deleItem={this.deleItem}
            ></TodoListUI>
        );
    }
    changeInputValue(e) {
        //   const action = {
        //     type: CHANGE_INPUT,
        //       value: e.target.value
        //   }
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }
    storeChagee() {
        this.setState(store.getState());
    }
    addTodo() {
        // const action = {
        //     type: ADD_ITEM,
        // }
        const action = addItemAction();
        store.dispatch(action);
    }
    deleItem(index) {
        //   const action = {
        //       type: DELETE_ITEM,
        //       index: index
        //   }
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;
