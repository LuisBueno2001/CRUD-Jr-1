import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../services/alumnos/alumnos.service';
import { Clases } from '../services/clases/clases';
import { Clasesalumnos } from '../services/clasesalumnos/clasesalumnos';
import { ClasesalumnosService } from '../services/clasesalumnos/clasesalumnos.service';
import { ClasesAlumnoComponent } from './clases-alumno/clases-alumno.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  Datos: Clasesalumnos | any;
  clasealumno: Clasesalumnos = new Clasesalumnos();
  clasesalumnos: Clasesalumnos[] = [];

  constructor(private clasesalumnosService: ClasesalumnosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
    console.log(this.clasealumno.id)
  }

  cargar(): void {
    this.clasesalumnosService.getDatos().subscribe(
      data => {
        this.Datos = data;
      }
    )
  }

  delete(clasealumno: Clasesalumnos): void {
    console.log(clasealumno.id);
    this.clasesalumnosService.delete(clasealumno.id).subscribe(
      res => this.clasesalumnosService.getAll().subscribe(
        Response => {
          this.clasesalumnos = Response
          window.location.reload();
        }
      )
    );
  }
}



/*
document.addEventListener('keyup', e=>{
  (event.target as HTMLInputElement).value
})


document.addEventListener('keyup', e=>{
  console.log(e.currentTarget.value);
  if (e.target.matches('#buscador')) {
    document.querySelectorAll('.articulos').forEach(ClasesAlumnoComponent => {
      ClasesAlumnoComponent.textContent?.toLocaleLowerCase().includes(e.target.value)
        ? ClasesAlumnoComponent.classList.remove('filtro')
        : ClasesAlumnoComponent.classList.add('filtro');
    })
  }
  
})*/
