package com.example.JJ_TodoList.service;

import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.UserDTO;

public interface LoginService {

    User authenticateUser(UserDTO user);
}