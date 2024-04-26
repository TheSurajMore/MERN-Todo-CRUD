  // src/App.js

  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import TaskForm from './components/TaskForm';
  import TaskList from './components/TaskList';

  function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetchTasks();
    }, []);

  const fetchTasks = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tasks`);
    setTasks(res.data);
  };

  const addTask = async (task) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/tasks`, { 
        description: task.text,
        completed: false
      });
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error("Error adding task:", error.response.data);
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTaskCompletion = async (id) => {
    const taskToToggle = tasks.find((task) => task._id === id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
    await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/tasks/${id}`, updatedTask);

    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


    return (
      <div className="App">
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
      </div>
    );
  }

  export default App;
