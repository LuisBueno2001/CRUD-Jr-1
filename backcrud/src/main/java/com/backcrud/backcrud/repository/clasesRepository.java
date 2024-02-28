package com.backcrud.backcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backcrud.backcrud.entity.clase;

@Repository
public interface clasesRepository extends JpaRepository<clase, Long>{
    
}
