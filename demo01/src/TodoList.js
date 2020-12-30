import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {changeInputAction, deleteItemAction, addItemAction} from './store/actionCreaters.js'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChagee = this.storeChagee.bind(this)
    store.subscribe(this.storeChagee)
  }

  render() { 
    return ( 
      <div>
            <div style={{ margin:'10px' }}>
                <Input 
                placeholder={this.state.inputValue} 
                style={{ width: '250px', marginRight: '20px' }}
                onChange={this.changeInputValue} 
                value={this.state.inputValue}
                />
                <Button onClick={this.addTodo.bind(this)}  type='primary'>增加</Button>
            </div>
            <div style={{ margin: '10px', width:'300px' }}>
                <List 
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => 
                    (<List.Item onClick={this.deleItem.bind(this, index)}>
                        {item}
                    </List.Item>)}>
                </List>
            </div>
      </div>
     );
  }
  changeInputValue(e) {
    //   const action = {
    //     type: CHANGE_INPUT,
    //       value: e.target.value
    //   }
        const action = changeInputAction(e.target.value)
      store.dispatch(action)
  }
  storeChagee () {
      this.setState(store.getState())
  }
  addTodo() {
    // const action = {
    //     type: ADD_ITEM, 
    // }
    const action = addItemAction()
    store.dispatch(action)
  }
  deleItem(index) {
    //   const action = {
    //       type: DELETE_ITEM, 
    //       index: index
    //   }
        const action = deleteItemAction(index)
      store.dispatch(action)
  }
}
 
export default TodoList;