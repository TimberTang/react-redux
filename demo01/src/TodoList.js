import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'



const data = [
    '八点开会',
    '九点沟通',
    '写代码'
]

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div>
            <div style={{ margin:'10px' }}>
                <Input 
                placeholder='Write something' 
                style={{ width: '250px', marginRight: '20px' }} />
                <Button type='primary'>增加</Button>
            </div>
            <div style={{ margin: '10px', width:'300px' }}>
                <List 
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>
                        {item}
                    </List.Item>)}>
                </List>
            </div>
      </div>
     );
  }
}
 
export default TodoList;