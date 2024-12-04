import React, { useState } from 'react';

const ToDoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task.text);

  // Handle edit toggle and save
  const handleEdit = () => {
    if (isEditing) {
      props.editTask(props.task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${props.task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className={props.task.completed ? 'completed' : ''}>
          {props.task.text}
        </span>
      )}
      <button onClick={() => props.toggleCompletion(props.task.id)} className="mark-completed-button">
        {props.task.completed ? 'Unmark' : 'Completed'}
      </button>
      <button onClick={handleEdit} className="edit-button">
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => props.deleteTask(props.task.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
