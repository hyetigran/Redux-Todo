import React from 'react';
import TodoContainer from './container/TodoContainer.js';
import './components/Todo.css';

class App extends React.Component {
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
					<TodoContainer />
			</div>
		);
	}
}

export default App;
