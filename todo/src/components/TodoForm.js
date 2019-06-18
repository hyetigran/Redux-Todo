import React from 'react';
import './Todo.css';

function TodoForm({ toDoTask, changeHandler, addTask, clearItem, selectHandler }) {
	return (
		<div>
			<input value={toDoTask} onChange={changeHandler} placeholder="Enter your task" type="text">
				{toDoTask}
			</input>
			<button onClick={addTask}>Add to List</button>
			{/* <button onClick={clearItem}>Clear</button> */}
		</div>
	);
}

export default TodoForm;
