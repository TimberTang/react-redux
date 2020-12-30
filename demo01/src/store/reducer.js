
import {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM} from './actionTypes'


const defaultState = {
	inputValue: 'Write something', 
	list: [
		'八点开会',
		'九点沟通',
		'写代码'
	]
}

export default function(state = defaultState, action) {
  // reducer 只能接受state， 不能改变state
  if (action.type === CHANGE_INPUT) {
	  let newState = JSON.parse(JSON.stringify(state)) // 拷贝
	  newState.inputValue = action.value
	  return newState
  }
  if (action.type === ADD_ITEM) {
	let newState = JSON.parse(JSON.stringify(state)) // 拷贝
	newState.list.push(newState.inputValue)
	newState.inputValue = ''
	return newState
  }
  if (action.type === DELETE_ITEM) {
	let newState = JSON.parse(JSON.stringify(state)) // 拷贝
	newState.list.splice(action.index, 1)
	return newState
  }
  return state
}