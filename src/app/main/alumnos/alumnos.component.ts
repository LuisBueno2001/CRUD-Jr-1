import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../../services/alumnos/alumnos';
import { AlumnosService } from '../../services/alumnos/alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Clases } from '../../services/clases/clases';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  titulo: string = "Registro de Materias"
  alumno: Alumnos = new Alumnos();
  alumnos: Alumnos[] = [];

  constructor(private alumnosservice: AlumnosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.alumnosservice.getAll().subscribe(
      e => this.alumnos = e
    );
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id: number = e['id'];
        if (id) {
          this.alumnosservice.get(id).subscribe(
            es => this.alumno = es
          );
        }
      }
    );
  }

  create(): void {
    if (typeof (this.alumno.nombre) === "string") {
      if (this.alumno.nombre) {
        this.alumnosservice.create(this.alumno).subscribe(
          res => window.location.reload()
        )
      } else {
        alert("Porfavor introduce un alumno")
      }
    } else {
      alert("El alumno no puede ser un numero")
    }
  }

  update(): void {
    this.alumnosservice.update(this.alumno).subscribe(
      e => window.location.reload()
      )
  }

  delete(Alumno: Alumnos): void {
    this.alumnosservice.delete(Alumno.alumno_id).subscribe(
      res => this.alumnosservice.getAll().subscribe(
        Response => this.alumnos = Response
      )
    );
  }

}
