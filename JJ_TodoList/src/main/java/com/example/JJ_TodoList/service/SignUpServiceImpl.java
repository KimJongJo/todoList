package com.example.JJ_TodoList.service;

import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.UserDTO;
import com.example.JJ_TodoList.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class SignUpServiceImpl implements SignUpService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    @Transactional
    public User createUser(UserDTO userDTO) {

        User user = User.builder()
                .userName(userDTO.getName())
                .userEmail(userDTO.getEmail())
                .userPassword(passwordEncode(userDTO.getPassword()))
                .build();

        userRepository.save(user);

        return user;
    }

    // 비밀번호 암호화
    private String passwordEncode(String password){
        return bCryptPasswordEncoder.encode(password);
    }
}
