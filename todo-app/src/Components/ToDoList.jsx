import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => { // Here, props are received
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      props.addTask(newTask.trim()); // Accessing addTask from props
      setNewTask('');
    }
  };

  return (
    <div className="todo-list-container">
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-button">
          Add
        </button>
      </div>
      <ul className="task-list">
        {props.tasks.map((task) => (
          <ToDoItem
            key={task.id} // Unique key for each task
            task={task} // Passing individual task to ToDoItem via props
            deleteTask={props.deleteTask} // Passing deleteTask function from props
            toggleCompletion={props.toggleCompletion} // Passing toggleCompletion function from props
            editTask={props.editTask} // Passing editTask function from props
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
