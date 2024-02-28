package com.backcrud.backcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backcrud.backcrud.entity.clasesAlumno;

@Repository
public interface clasesAlumnoRepository extends JpaRepository<clasesAlumno, Long>{
    
}
