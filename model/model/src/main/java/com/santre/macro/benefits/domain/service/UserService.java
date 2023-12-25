package com.santre.macro.benefits.domain.service;


import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.repository.UserRepository;
import com.santre.macro.benefits.domain.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final CategoryRepository categoryRepository;

    public List<UserEntity> getAll(){
        return  userRepository.findAll();
    }

    public Optional<UserEntity> getById(Long id){
        return userRepository.findById(id);
    }

    public Optional<UserEntity> getByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
              @Override
              public UserDetails loadUserByUsername(String username) {
                  var user = userRepository.findByEmail(username)
                          .orElseThrow(() -> new UsernameNotFoundException("User not found"));
                  return user;
              }
        };
    }

    @Transactional
    public UserEntity save(UserEntity newUser) {
        if (newUser.getId() == null) {
            newUser.setCreatedAt(LocalDateTime.now());
        }

        newUser.setUpdatedAt(LocalDateTime.now());
        return userRepository.save(newUser);
    }

    @Transactional
    public void delete(Long id) {
        var user = userRepository.getReferenceById(id);
        for (var category: user.getCategories()){
            category.getUsers().remove(user);
            categoryRepository.save(category);
        }
        userRepository.deleteById(id);
    }

}
