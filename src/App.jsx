import React from 'react';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Write your tasks here and save them!</h1>
      <TodoList />
    </div>
  );
};

export default App;