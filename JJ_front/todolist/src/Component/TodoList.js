import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    axios
      .post(
        "http://localhost:8080/todo/todos",
        {
          userId: 12,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
      });
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, id: Date.now() }]);
    setNewTodo(""); // 입력 후 비우기

    axios
      .post("http://localhost:8080/todo/work", {
        title: newTodo,
        userId: 12,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>해야 할 일</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력해주세요"
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>

            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-btn"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
