
import { put, takeEvery } from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import axios from 'axios'
import {getTodoListActon} from './actionCreaters'

// gennerator
function * mySaga() {
	yield takeEvery(GET_MY_LIST, getList)
}

function *getList () {
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
		// 	]
		// 	const action = getTodoListActon(data)
		// 	put(action)
		// })
		
		const data = [
			        '八点开会',
			        '九点沟通',
			        '写代码'
				]
		const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
		console.log(res);
		const action = getTodoListActon(data)
		yield put(action)
}

export default mySaga;