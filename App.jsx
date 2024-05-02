import React, { useState, useEffect } from 'react';
import { TodoInput } from './Components/TodoInput';
import { TodoList}  from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify(newList));
  }

  const handleAddTodos = (newtodo) => {
    const newTodos = [...todos, newtodo];
    persistData(newTodos);
    setTodos(newTodos);
  };

  const handledelete = (id) => {
    const newTodos = todos.filter((todo, index) => index !== id);
    persistData(newTodos);
    setTodos(newTodos);
  };

  const handleedit = (id) => {
    const value = todos[id];
    setTodoValue(value);
    handledelete(id);
  };

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    if (localTodos && Array.isArray(localTodos)) {
      setTodos(localTodos);
    }
  }, []);

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} setTodoValue={setTodoValue} todoValue={todoValue} />
      <TodoList todos={todos} handledelete={handledelete} handleedit={handleedit} />
    </>
  );
};

export default App;
