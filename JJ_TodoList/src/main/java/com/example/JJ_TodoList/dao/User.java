package com.example.JJ_TodoList.dao;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@Entity
@Getter
@Setter
@Table(name = "users")
@NoArgsConstructor
@ToString
public class User {

    @Id
    @Column(name = "users_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
    @SequenceGenerator(name = "user_id_seq", sequenceName = "user_id_seq", allocationSize = 1)
    private Long userId;

    @Column(name = "users_name")
    private String userName;

    @Column(name = "users_email")
    private String userEmail;

    @Column(name = "users_password")
    private String userPassword;

    @Column(name = "users_create_at")
    private LocalDateTime createAt;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Todos> todos;

    @Builder
    public User(String userName, String userEmail, String userPassword, LocalDateTime createAt){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.createAt = createAt != null ? createAt : LocalDateTime.now();
    }


}
