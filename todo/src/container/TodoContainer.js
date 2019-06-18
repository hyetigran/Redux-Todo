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
			toDoList: [],
			toDoTask: '',
			isNotComplete: true
		};
	}
	changeHandler = event => {
		this.setState({
			toDoTask: event.target.value
		});
	};

	addTaskHandler = () => {
		const newTask = {
			id: uuid(),
			task: this.state.toDoTask,
			isNotComplete: true
		};
		const newToDoList = this.state.toDoList.concat(newTask);

		this.setState({
			toDoList: newToDoList,
			toDoTask: ''
		});
	};

	removeItemHandler = id => {
		const newToDoList = this.state.toDoList.filter(el => el.id !== id);
		this.setState({
			toDoList: newToDoList
		});
	};

	markCompleteHandler = id => {
		this.setState(currentState => ({
			toDoList: currentState.toDoList.map(task => {
				if (task.id === id) {
					task.isNotComplete = false;
				}
				return task;
			})
		}));
	};
	clearAllCompletedHandler = () => {
		this.setState(currentState => ({
			toDoList: currentState.toDoList.filter(task => task.isNotComplete)
		}));
	};

	render() {
		return (
			<div className="TodoWrapper">
				<h3>My ToDo List:</h3>
				<TodoForm
					toDoList={this.props.todoList}
					changeHandler={this.changeHandler}
					selectHandler={this.selectHandler}
					addTask={this.addTaskHandler}
				/>
				{this.props.todoList.map(task => (
					<TodoList
						key={task.id}
						task={task}
						markCompleteHandler={this.markCompleteHandler}
						removeItemHandler={this.removeItemHandler}
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
		onAddedTodo: text => dispatch({ type: actionTypes.ADD_TODO, payload: { text: text } }),
		onRemovedPerson: id => dispatch({ type: actionTypes.REMOVE_TODO, payload: id })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
