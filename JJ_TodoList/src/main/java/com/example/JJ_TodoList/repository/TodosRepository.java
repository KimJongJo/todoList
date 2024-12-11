package com.example.JJ_TodoList.repository;

import com.example.JJ_TodoList.dao.Todos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodosRepository extends JpaRepository<Todos, Long> {
}
