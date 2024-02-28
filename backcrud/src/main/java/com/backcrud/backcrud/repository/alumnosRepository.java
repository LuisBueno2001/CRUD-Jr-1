package com.backcrud.backcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backcrud.backcrud.entity.alumnos;

@Repository
public interface alumnosRepository extends JpaRepository<alumnos, Long>{

}
