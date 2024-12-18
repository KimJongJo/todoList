import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList(props) {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    axios
      .post("http://localhost:8080/todo/todos", {
        userId: props.user.id,
      })
      .then((response) => {
        console.log(response.data); // 응답 데이터를 확인
        setTodos(
          response.data.map((item) => ({
            id: item.todosId,
            text: item.todosTitle,
          }))
        );
      })
      .catch((error) => {
        console.error("할 일 목록을 불러오는 중 오류 발생", error);
      });
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem = { text: newTodo, id: Date.now() };

    // 상태를 업데이트한 후 할 일 목록에 추가
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);

    // 새로운 할 일을 서버로 추가
    axios
      .post("http://localhost:8080/todo/work", {
        title: newTodo,
        userId: props.user.id,
      })
      .then((response) => {
        console.log("할 일 추가 성공:", response.data);
      })
      .catch((error) => {
        console.error("할 일 추가 오류 발생", error);
      });

    setNewTodo(""); // 입력 후 비우기
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    axios
      .delete("http://localhost:8080/todo/todos", {
        data: { todosId: id },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("할 일 삭제 성공:", response.data);
      })
      .catch((error) => {
        console.error("할 일 삭제 오류 발생", error);
      });
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
