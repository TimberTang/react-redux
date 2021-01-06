import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => (
  {
    type: CHANGE_INPUT,
    value
  }
)

export const deleteItemAction = (index) => (
  {
    type: DELETE_ITEM,
    index
  }
)

export const addItemAction = () => (
  {
  type: ADD_ITEM,
  }
)

export const getTodoListActon = (data) => (
  {
    type: GET_LIST,
    data
  }
)

export const getTodoList = () => {
	return (dispatch) => {
		axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            // test
            // console.log(error);
            const data = [
                '八点开会',
                '九点沟通',
                '写代码'
			]
			const action = getTodoListActon(data)
			dispatch(action)
        })
	}
}

export const getMyTodoListAction = () => (
	{
		type: GET_MY_LIST,
	}
  )