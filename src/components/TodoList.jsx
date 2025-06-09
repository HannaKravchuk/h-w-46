import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/slices/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>What i need to do?</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onDelete={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
