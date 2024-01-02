package com.santre.macro.benefits.domain.repository;


import com.santre.macro.benefits.domain.entity.Role;
import com.santre.macro.benefits.domain.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

  Optional<UserEntity> findByEmail(String email);

  List<UserEntity> findByRole(Role role);
  
}
