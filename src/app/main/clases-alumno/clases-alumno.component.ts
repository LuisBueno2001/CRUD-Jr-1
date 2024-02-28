import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Clasesalumnos } from '../../services/clasesalumnos/clasesalumnos';
import { ClasesalumnosService } from '../../services/clasesalumnos/clasesalumnos.service';
import { Alumnos } from '../../services/alumnos/alumnos';
import { AlumnosService } from '../../services/alumnos/alumnos.service';
import { Clases } from '../../services/clases/clases';
import { ClasesService } from '../../services/clases/clases.service';

@Component({
  selector: 'app-clases-alumno',
  templateUrl: './clases-alumno.component.html',
  styleUrl: './clases-alumno.component.css'
})
export class ClasesAlumnoComponent implements OnInit {

  clasealumno: Clasesalumnos = new Clasesalumnos();
  clasesalumnos: Clasesalumnos[] = [];
  alumno: Alumnos = new Alumnos();
  alumnos: Alumnos[] = [];
  clase: Clases = new Clases();
  clases: Clases[] = [];

  print(value_of: string, value: string) {
    console.log(`Value of ${value_of} is ${value}`);
  }

  constructor(private clasesservice:ClasesService, private alumnosservice:AlumnosService, private clasesalumnosService: ClasesalumnosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.clasesservice.getAll().subscribe(
      e => this.clases = e
    );
    this.alumnosservice.getAll().subscribe(
      e => this.alumnos = e
    );
    this.clasesalumnosService.getAll().subscribe(
      e => this.clasesalumnos = e
    );
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id: number = e['id'];
        if (id) {
          this.clasesalumnosService.get(id).subscribe(
            es => this.clasealumno = es
          );
        }
      }
    );
  }

  update(): void {
    this.clasesalumnosService.update(this.clasealumno).subscribe(
      e => this.router.navigate(['/main'])
    )
  }

  delete(clasesalumnos:Clasesalumnos):void{
    this.clasesalumnosService.delete(clasesalumnos.id).subscribe(
      res=>this.clasesalumnosService.getAll().subscribe(
        Response=>this.clasesalumnos=Response
      )
    );
  }

  create():void{
    if((this.clasealumno.claseAlumno)==="Materia" && (this.clasealumno.nombreAlumno)==="Nombre" ){
      alert("Porfavor introduce una materia y/o nombre")
    }else{
      this.clasesalumnosService.create(this.clasealumno).subscribe(
        res=>this.router.navigate(['/main'])
    )}
    }
}