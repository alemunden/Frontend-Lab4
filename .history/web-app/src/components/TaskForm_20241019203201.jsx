import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();