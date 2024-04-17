// src/components/Task.js

import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={() => onToggle(task._id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
