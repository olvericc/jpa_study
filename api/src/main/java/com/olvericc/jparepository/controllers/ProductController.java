package com.olvericc.jparepository.controllers;

import com.olvericc.jparepository.entities.Product;
import com.olvericc.jparepository.exceptions.ProductNotFoundException;
import com.olvericc.jparepository.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/searchDescription")
    public ResponseEntity<Page<Product>> searchDescription(
            @RequestParam(defaultValue = "") String description, Pageable pageable) {
        Page<Product> result = repository.searchDescription(description, pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchQuantity")
    public ResponseEntity<Page<Product>> searchQuantity(
            @RequestParam(defaultValue = "0") Integer quantity, Pageable pageable) {
        Page<Product> result = repository.searchQuantity(quantity, pageable);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/searchById")
    public ResponseEntity<Page<Product>> searchById(@RequestParam(defaultValue = "") Long id, Pageable pageable) {
        Page<Product> result = repository.searchById(id, pageable);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return repository.save(product);
    }

    @PutMapping(value = "/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product newProduct) {
        return repository.findById(id)
                .map(product -> {
                    product.setDescription(newProduct.getDescription());
                    product.setPrice(newProduct.getPrice());
                    product.setQuantity(newProduct.getQuantity());

                    return repository.save(product);
                })
        .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping(value = "/{id}")
    public void deleteProduct(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        repository.deleteById(id);
    }

}
