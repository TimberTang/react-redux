import "antd/dist/antd.css";
import React from "react";
import { Input, Button, List } from "antd";

// // UI组件 可以写成无状态组件
// class TodoListUI extends Component {
//     render() {
//         return (
            
//         );
//     }
// }

// export default TodoListUI;


// 无状态组件 
const ToDoListUI = (props) => {
	return (
		<div>
                <div style={{ margin: "10px" }}>
                    <Input
                        placeholder={props.inputValue}
                        style={{ width: "250px", marginRight: "20px" }}
                        onChange={props.changeInputValue}
                        value={props.inputValue}
                    />
                    <Button
                        onClick={props.addTodo.bind(this)}
                        type="primary"
                    >
                        增加
                    </Button>
                </div>
                <div style={{ margin: "10px", width: "300px" }}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={() => props.deleItem(index)}
                            >
                                {item}
                            </List.Item>
                        )}
                    ></List>
                </div>
            </div>
	)
}



export default ToDoListUI;