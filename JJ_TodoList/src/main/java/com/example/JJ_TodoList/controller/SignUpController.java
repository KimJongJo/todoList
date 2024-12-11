package com.example.JJ_TodoList.controller;

import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.UserDTO;
import com.example.JJ_TodoList.service.SignUpServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/signup")
@RequiredArgsConstructor
public class SignUpController {

    private final SignUpServiceImpl signUpService;

    @PostMapping("/newUser")
    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO){

        User user = signUpService.createUser(userDTO);
        System.out.println(user);
        return ResponseEntity.ok("회원가입 완료");
    }




}
