import React from 'react';
import TodoContainer from './container/TodoContainer.js';
import './components/Todo.css';

class App extends React.Component {

	render() {
		return (
			<div>
				<TodoContainer />
			</div>
		);
	}
}

export default App;
