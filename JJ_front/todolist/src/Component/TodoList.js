import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  // const loadTodos = () => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   if (user) {
  //     axios
  //       .post(`http://localhost:8080/todo/todos`, {
  //         params: { userId: user.id },
  //       })
  //       .then((response) => {
  //         // 중복된 할 일 목록을 제거하고 상태 업데이트
  //         const uniqueTodos = response.data.filter(
  //           (todo, index, self) =>
  //             index === self.findIndex((t) => t.todosId === todo.todosId)
  //         );
  //         setTodos(uniqueTodos); // 중복된 할 일 제거 후 상태 업데이트
  //       })
  //       .catch((error) => {
  //         console.error("할 일 목록을 불러오는 중 오류 발생", error);
  //       });
  //   }
  // };

  const loadTodos = () => {
    axios
      .post("http://localhost:8080/todo/todos", {
        userId: 12,
      })
      .then((response) => {
        console.log(response.data); // 응답 데이터를 확인
        setTodos((prevTodos) => [
          ...prevTodos,
          ...response.data.map((item) => ({
            id: item.todosId,
            text: item.todosTitle,
          })),
        ]);
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

    axios.delete("http://localhost:8080/todo/todos", {
      data: { todosId: id },
      headers: {
        "Content-Type": "application/json",
      },
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
