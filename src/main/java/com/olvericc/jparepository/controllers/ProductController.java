package com.olvericc.jparepository.controllers;

import com.olvericc.jparepository.entities.Product;
import com.olvericc.jparepository.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    private final ProductRepository repository;

    @Autowired
    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<Product>> findAll() {
        List<Product> result = repository.findAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/page")
    public ResponseEntity<Page<Product>> findAll(Pageable pageable) {
        Page<Product> result = repository.findAll(pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchPrice")
    public ResponseEntity<Page<Product>> searchPrice(
            @RequestParam(defaultValue = "0") Double minPrice,
            @RequestParam(defaultValue = "1000000000000") Double maxPrice, Pageable pageable) {
        Page<Product> result = repository.searchPrice(minPrice, maxPrice, pageable);
        return ResponseEntity.ok(result);
    }

}