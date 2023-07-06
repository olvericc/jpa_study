package com.olvericc.jparepository.repositories;

import com.olvericc.jparepository.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
