package com.backcrud.backcrud.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backcrud.backcrud.repository.alumnosRepository;

import jakarta.validation.constraints.NotNull;

import com.backcrud.backcrud.entity.alumnos;


@Service
public class alumnosService {
    
    @Autowired
    alumnosRepository alumnosrepository;

    public java.util.List<alumnos> getAlumnos() {
        return alumnosrepository.findAll();
    }

    @NotNull
    public Long id;

    public Optional<alumnos> getAlumnos(Long id) {
        return alumnosrepository.findById(id);
    }

    public void saveOrUpdate(alumnos Alumnos) {
        alumnosrepository.save(Alumnos);
    }

    public void delete(Long id) {
        alumnosrepository.deleteById(id);
    }
}
