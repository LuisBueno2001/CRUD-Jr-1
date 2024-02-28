package com.backcrud.backcrud.controller;

import com.backcrud.backcrud.entity.clasesAlumno;
import com.backcrud.backcrud.service.clasesAlumnoService;

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
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/v2/clasesalumno")
@CrossOrigin(origins = "http://localhost:4200/")

public class clasesAlumnoController {

    @Autowired
    private clasesAlumnoService clasesalumnoservice;
    
//Buscar Alumnos
    @GetMapping
    public List<clasesAlumno> getAll(){
        return clasesalumnoservice.getClasesAlumno();
    }

//Actualizar Alumnos
    @PostMapping
    public void saveUpdate(@RequestBody clasesAlumno ClasesAlumno){
        clasesalumnoservice.saveOrUpdate(ClasesAlumno);
    }

//Eliminar Alumnos
    @DeleteMapping("{clasesAlumnoId}")
    public void delete(@PathVariable("clasesAlumnoId") Long clasesAlumnoId){
        clasesalumnoservice.delete(clasesAlumnoId);
    }

//Buscar Alumno por Id
    @GetMapping("{clasesAlumnoId}")
    public Optional<clasesAlumno> getById(@PathVariable("clasesAlumnoId") Long clasesAlumnoId){
        return clasesalumnoservice.getClasesAlumno(clasesAlumnoId);
    }

}
