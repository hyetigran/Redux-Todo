import * as actionTypes from './actions';
import uuid from 'uuid';

const initialState = {
	todoList: [{ id: uuid(), task: 'Finish this task', isNotComplete: true }]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return { ...state, todoList: state.todoList.concat(action.payload) };
		case actionTypes.REMOVE_TODO:
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.id !== action.payload)
			};
		case actionTypes.UPDATE_TODO:
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.id !== action.payload)
			};
		case actionTypes.MARK_COMPLETE_TODO:
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.id !== action.payload)
			};
		default:
			return state;
	}
};

export default reducer;
