package com.example.JJ_TodoList.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TodoDTO {
    private Long todosId;
    private String title;
    private Long userId;
}
