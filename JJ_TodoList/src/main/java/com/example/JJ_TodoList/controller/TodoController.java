package com.example.JJ_TodoList.controller;

import com.example.JJ_TodoList.dao.Todos;
import com.example.JJ_TodoList.dto.TodoDTO;
import com.example.JJ_TodoList.dto.UserDTO;
import com.example.JJ_TodoList.service.TodoServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoServiceImpl todoService;

    @PostMapping("/todos")
    public List<Todos> todos(@RequestBody UserDTO userDTO){

        List<Todos> list = todoService.getTodos(userDTO.getUserId());

        System.out.println(list.size());
        return list;

    }

    @PostMapping("/work")
    public ResponseEntity<?> addTodo(@RequestBody TodoDTO todoDTO){

        todoService.save(todoDTO);

        return ResponseEntity.ok("할일 추가 완료");
    }

}
