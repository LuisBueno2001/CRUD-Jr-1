package com.backcrud.backcrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backcrud.backcrud.entity.clasesAlumno;
import com.backcrud.backcrud.repository.clasesAlumnoRepository;

import jakarta.validation.constraints.NotNull;

@Service
public class clasesAlumnoService {

       @Autowired
    clasesAlumnoRepository clasesalumnorepository;

    public List<clasesAlumno> getClasesAlumno() {
        return clasesalumnorepository.findAll();
    }

    @NotNull
    public Long id;

    public Optional<clasesAlumno> getClasesAlumno(Long id) {
        return clasesalumnorepository.findById(id);
    }

    public void saveOrUpdate(clasesAlumno ClasesAlumno) {
        clasesalumnorepository.save(ClasesAlumno);
    }

    public void delete(Long id) {
        clasesalumnorepository.deleteById(id);
    }
}
