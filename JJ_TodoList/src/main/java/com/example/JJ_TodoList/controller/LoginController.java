package com.example.JJ_TodoList.controller;

import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.UserDTO;
import com.example.JJ_TodoList.service.LoginServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/login")
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginServiceImpl loginService;
    @PostMapping
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO){

        try{
            User user = loginService.authenticateUser(userDTO);
            System.out.println(user);
            return ResponseEntity.ok(user);

        } catch(IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

}
