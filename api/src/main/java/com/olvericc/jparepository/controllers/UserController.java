package com.olvericc.jparepository.controllers;

import com.olvericc.jparepository.entities.User;
import com.olvericc.jparepository.exceptions.UserNotFoundException;
import com.olvericc.jparepository.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    private final UserRepository repository;

    @Autowired
    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        List<User> result = repository.findAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/page")
    public ResponseEntity<Page<User>> findAll(Pageable pageable) {
        Page<User> result = repository.findAll(pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchSalary")
    public ResponseEntity<Page<User>> searchSalary(
            @RequestParam(defaultValue = "0") Double minSalary,
            @RequestParam(defaultValue = "1000000000000") Double maxSalary, Pageable pageable) {
        Page<User> result = repository.searchSalary(minSalary, maxSalary, pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchName")
    public ResponseEntity<Page<User>> searchName(@RequestParam(defaultValue = "") String name, Pageable pageable) {
        Page<User> result = repository.searchName(name, pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchEmail")
    public ResponseEntity<Page<User>> searchEmail(@RequestParam(defaultValue = "") String email, Pageable pageable) {
        Page<User> result = repository.searchEmail(email, pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchById")
    public ResponseEntity<Page<User>> searchById(@RequestParam(defaultValue = "") Long id, Pageable pageable) {
        Page<User> result = repository.searchById(id, pageable);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return repository.save(user);
    }

    @PutMapping(value = "/{id}")
    public User updateProduct(@PathVariable Long id, @RequestBody User newUser) {
        return repository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setSalary(newUser.getSalary());

                    return repository.save(user);
                })
        .orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        repository.deleteById(id);
    }

}
