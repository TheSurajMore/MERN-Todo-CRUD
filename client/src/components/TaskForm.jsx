// src/components/TaskForm.js

import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd({ text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
