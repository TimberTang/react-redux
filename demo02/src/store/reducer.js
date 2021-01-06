 
const defaultState = {
  inputValue: "Hello TimberTang",
  list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, _action) => {
  if(_action.type === 'input_change')
  {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = _action.value
    return newState
  }
  if(_action.type === 'todo_add')
  {
    console.log(state.inputValue);
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(state.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}

// react-redux 插件


