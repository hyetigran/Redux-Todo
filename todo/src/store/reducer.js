import * as actionTypes from './actions';
import uuid from 'uuid';

const initialState = {
	todoList: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			const newTodo = {
				id: uuid(),
				text: action.payload.text
			};
			return {
				...state,
				todoList: state.todoList.concat(newTodo)
			};
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
		default:
			return state;
	}
};

export default reducer;
