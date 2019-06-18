import * as actionTypes from './actions';

const initialState = {
	todoList: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: action.personData.name
			};
			return {
				...state,
				todoList: state.todoList.concat(newPerson)
			};
		case actionTypes.REMOVE_TODO:
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.id !== action.todoId)
      };
      case actionTypes.UPDATE_TODO:
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.id !== action.todoId)
			};
		default:
			return state;
	}
};

export default reducer;
