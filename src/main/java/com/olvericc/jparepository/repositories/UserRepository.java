package com.olvericc.jparepository.repositories;

import com.olvericc.jparepository.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT obj FROM User obj WHERE obj.salary >= :minSalary AND obj.salary <= :maxSalary")
    Page<User> searchSalary(Double minSalary, Double maxSalary, Pageable pageable);

    @Query("SELECT obj FROM User obj WHERE LOWER(obj.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    Page<User> searchName(String name, Pageable pageable);

    @Query("SELECT obj FROM User obj WHERE LOWER(obj.email) LIKE LOWER(CONCAT('%', :email, '%'))")
    Page<User> searchEmail(String email, Pageable pageable);

    @Query("SELECT obj FROM User obj WHERE obj.id = :id")
    Page<User> searchById(Long id, Pageable pageable);
}
