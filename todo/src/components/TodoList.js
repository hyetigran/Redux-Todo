import React from 'react';
import './Todo.css';

function TodoList({ task, removeItemHandler, markCompleteHandler }) {
	const isCompletedStyle = {
		textDecoration: task.isNotComplete ? 'none' : 'line-through'
	};
	return (
		<ul>
			<li>
				<span style={isCompletedStyle} onClick={() => markCompleteHandler(task.id)}>
					{task.task}
				</span>
				<button onClick={() => removeItemHandler(task.id)}>Clear</button>
			</li>
		</ul>
	);
}

export default TodoList;
