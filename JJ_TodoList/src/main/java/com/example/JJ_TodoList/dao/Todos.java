package com.example.JJ_TodoList.dao;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "todos")
@NoArgsConstructor
public class Todos {

    @Id
    @Column(name = "todos_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "todos_id_seq")
    @SequenceGenerator(name = "todos_id_seq", sequenceName = "todos_id_seq", allocationSize = 1)
    private Long todosId;

    @Column(name = "todos_title")
    private String todosTitle;

    @Column(name = "id_completed")
    private char isCompleted;

    @Column(name = "todos_create_at")
    private LocalDateTime todosCreateAt;

    @Column(name = "todos_update_at")
    private LocalDateTime todosUpdateAt;

    @ManyToOne
    @JoinColumn(name = "users_id", nullable = false)  // 외래키
    private User user;

}
