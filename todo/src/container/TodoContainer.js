import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import uuid from 'uuid';
import '../components/Todo.css';
import * as actionTypes from '../store/actions';

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//toDoList: [],
			todoTask: ''
			//isNotComplete: true
		};
	}
	changeHandler = event => {
		this.setState({
			todoTask: event.target.value
		});
	};

	addTaskHandler = () => {
		this.props.onAddedTodo(this.state.todoTask);
	};

	render() {
		return (
			<div className="TodoWrapper">
				<h3>My ToDo List:</h3>
				<TodoForm
					todoList={this.props.todoList}
					changeHandler={this.changeHandler}
					addTask={this.addTaskHandler}
				/>
				{this.props.todoList.map(task => (
					<TodoList
						key={task.id}
						task={task}
						markCompleteHandler={this.props.onMarkComplete}
						removeItemHandler={this.props.onRemovedTodo}
					/>
				))}
				<button onClick={this.clearAllCompletedHandler}>Clear All Completed Tasks</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddedTodo: task =>
			dispatch({ type: actionTypes.ADD_TODO, payload: { id: uuid(), task: task, isNotComplete: true } }),
		onRemovedTodo: id => dispatch({ type: actionTypes.REMOVE_TODO, payload: id }),
		onMarkComplete: id => dispatch({ type: actionTypes.MARK_COMPLETE_TODO, payload: id })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
