package com.backcrud.backcrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backcrud.backcrud.entity.clase;
import com.backcrud.backcrud.repository.clasesRepository;

import jakarta.validation.constraints.NotNull;

@Service
public class clasesService {

    @Autowired
    clasesRepository clasesrepository;

    public List<clase> getClases() {
        return clasesrepository.findAll();
    }

    @NotNull
    public Long id;

    public Optional<clase> getClases(Long claseId) {
        return clasesrepository.findById(claseId);
    }

    public void saveOrUpdate(clase Clase) {
        clasesrepository.save(Clase);
    }

    public void delete(Long id) {
        clasesrepository.deleteById(id);
    }
}
