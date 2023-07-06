package com.olvericc.jparepository.repositories;

import com.olvericc.jparepository.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT obj FROM Product obj WHERE obj.price >= :minPrice AND obj.price <= :maxPrice")
    Page<Product> searchPrice(Double minPrice, Double maxPrice, Pageable pageable);

}
