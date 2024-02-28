import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos/alumnos.service';
import { Clasesalumnos } from '../services/clasesalumnos/clasesalumnos';
import { ClasesalumnosService } from '../services/clasesalumnos/clasesalumnos.service';
import { Clases } from '../services/clases/clases';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  clasealumno:Clasesalumnos=new Clasesalumnos();
  clasesalumnos: Clasesalumnos[] = [];

  constructor(private clasesalumnosService: ClasesalumnosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.clasesalumnosService.getAll().subscribe(
      e => this.clasesalumnos = e
    );
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id:number=e['id'];
        if(id){
          this.clasesalumnosService.get(id).subscribe(
            es=>this.clasealumno=es
          );
        }
      }
    );
  }

  update():void{
    this.clasesalumnosService.update(this.clasealumno).subscribe(
      e=>this.router.navigate(['/main'])
    )
  }

  delete(clasesalumnos:Clasesalumnos):void{
    this.clasesalumnosService.delete(clasesalumnos.id).subscribe(
      res=>this.clasesalumnosService.getAll().subscribe(
        Response=>this.clasesalumnos=Response
      )
    );
  }
}
