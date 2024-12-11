package com.example.JJ_TodoList.service;

import com.example.JJ_TodoList.dao.User;
import com.example.JJ_TodoList.dto.UserDTO;
import com.example.JJ_TodoList.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    // 요청한 이메일, 비밀번호가 존재하는 회원인지 확인하기
    @Override
    public User authenticateUser(UserDTO userDTO) {

        User user = userRepository.findByUserEmail(userDTO.getEmail());
        if(user == null) {
            throw new IllegalArgumentException("존재하지 않는 회원입니다.");
        }

        if(!bCryptPasswordEncoder.matches(userDTO.getPassword(), user.getUserPassword())){
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        return user;
    }
}
