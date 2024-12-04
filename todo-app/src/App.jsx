import React, { useState } from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Function to delete a task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to toggle task completion
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to edit an existing task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <ToDoList
        tasks={tasks} // Passing tasks as props
        addTask={addTask} // Passing addTask function as props
        deleteTask={deleteTask} // Passing deleteTask function as props
        toggleCompletion={toggleCompletion} // Passing toggleCompletion function as props
        editTask={editTask} // Passing editTask function as props
      />
    </div>
  );
};

export default App;
