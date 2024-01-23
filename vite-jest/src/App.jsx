import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos[0])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          gap: "50px"
        }}>
          <h1>{todo.title}</h1>
          <p>{todo.completed.toString()}</p>
        </div>
      ))}
    </>
  );
}

export default App;