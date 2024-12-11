package com.example.JJ_TodoList.controller;

import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.UserDTO;
import com.example.JJ_TodoList.service.LoginServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/login")
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginServiceImpl loginService;
    @PostMapping
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO){


        System.out.println("들어오긴 함??????????????");
        try{
            User user = loginService.authenticateUser(userDTO);
            return ResponseEntity.ok(user);

        } catch(IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }



    }

}
