package com.backcrud.backcrud.controller;

import org.springframework.web.bind.annotation.RestController;

import com.backcrud.backcrud.entity.clase;
import com.backcrud.backcrud.service.clasesService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(path="api/v2/clases")
@CrossOrigin(origins = "http://localhost:4200/")

public class clasesController {

    @Autowired
    private clasesService clasesservice;

//Buscar Alumnos
    @GetMapping
    public List<clase> getAll(){
        return clasesservice.getClases();
    }

//Actualizar Alumnos
    @PostMapping
    public void saveUpdate(@RequestBody clase Clase){
        clasesservice.saveOrUpdate(Clase);
    }

//Eliminar Alumno
    @DeleteMapping("{claseId}")
    public void delete(@PathVariable("claseId") Long claseId){
        clasesservice.delete(claseId);
    }

//Buscar Alumno por Id
    @GetMapping("{claseId}")
    public Optional<clase> getById(@PathVariable("claseId") Long claseId){
        return clasesservice.getClases(claseId);
    }
}
