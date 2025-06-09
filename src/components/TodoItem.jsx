import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <span
        onClick={onToggle}
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={onDelete}>DELETE</button>
    </li>
  );
};

export default TodoItem;