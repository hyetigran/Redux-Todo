import React from 'react';
import './Todo.css';

function TodoList({ task, removeItemHandler, markCompleteHandler }) {
	const isComplete = task.isNotComplete ? 'Complete' : 'Undo';
	return (
		<ul>
			<li>
				<span>{task.task}</span>
				<button onClick={() => removeItemHandler(task.id)}>Delete</button>
				<button onClick={() => markCompleteHandler(task.id)}>{isComplete}</button>
			</li>
		</ul>
	);
}

export default TodoList;
