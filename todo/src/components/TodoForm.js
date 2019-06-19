import React from 'react';
import './Todo.css';

function TodoForm({ todoTask, changeHandler, addTask }) {
	return (
		<div>
			<input value={todoTask} onChange={changeHandler} placeholder="Enter your task" type="text">
				{todoTask}
			</input>
			<button onClick={addTask}>Add to List</button>
			{/* <button onClick={clearItem}>Clear</button> */}
		</div>
	);
}

export default TodoForm;
