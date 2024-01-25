import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        setTodo(data);
      } catch (err) {
        console.error('Error fetching todo:', err.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h3>Task 3: Fetch Data</h3>
      {todo ? (
        <div>
          <h4>Title: {todo.title}</h4>
          <div>
            ID: {todo.id}<br/>
            UserID: {todo.userId}<br/>
            Completed: {todo.completed ? 'True' : 'False'}<br/>
          </div>
        </div>
      ) : (
        <p>Loading todo...</p>
      )}
    </div>
  );
};

export default Todo;
