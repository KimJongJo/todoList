package com.example.JJ_TodoList.service;

import com.example.JJ_TodoList.dao.Todos;
import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.TodoDTO;
import com.example.JJ_TodoList.repository.TodosRepository;
import com.example.JJ_TodoList.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService{

    private final TodosRepository todosRepository;
    private final UserRepository userRepository;


    @Override
    public Todos save(TodoDTO todoDTO) {

        User user = userRepository.findById(todoDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("user가 존재하지 않음" + todoDTO.getUserId()));


        Todos todos = Todos.builder()
                .todosTitle(todoDTO.getTitle())
                .user(user)
                .todosCreateAt(LocalDateTime.now())
                .build();


        return todosRepository.save(todos);
    }

    @Override
    public List<Todos> getTodos(Long userId) {

        return todosRepository.findByUser_UserId(userId);
    }
}
