import React from "react";
import { connect } from 'react-redux'


const TodoList = (props) => {
        let {inputValue, inputChange, addTodo, list} = props
        return (
            <div>
                <input value ={inputValue} onChange={inputChange}></input>
                <button onClick={addTodo}>提交</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index}>{index}:{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
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
