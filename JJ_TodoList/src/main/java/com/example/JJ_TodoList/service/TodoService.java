package com.example.JJ_TodoList.service;

import com.example.JJ_TodoList.dao.Todos;
import com.example.JJ_TodoList.dto.TodoDTO;

import java.util.List;

public interface TodoService {
    Todos save(TodoDTO todoDTO);

    List<Todos> getTodos(Long userId);
}
