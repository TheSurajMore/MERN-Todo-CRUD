// src/components/TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => { // Adjusted parameter name to match prop passed from App
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
