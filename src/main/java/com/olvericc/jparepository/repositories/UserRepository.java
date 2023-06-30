package com.olvericc.jparepository.repositories;

import com.olvericc.jparepository.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
