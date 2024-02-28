import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../../services/alumnos/alumnos';
import { Clases } from '../../services/clases/clases';
import { ClasesService } from '../../services/clases/clases.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent implements OnInit{
  titulo:string="Registro de Materias"
  clase:Clases=new Clases();
  clases: Clases[] = [];

  constructor(private clasesservice:ClasesService, private router:Router, private activatedRoute:ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.clasesservice.getAll().subscribe(
      e => this.clases = e
    );
      this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id:number=e['id'];
        if(id){
          this.clasesservice.get(id).subscribe(
            es=>this.clase=es
          );
        }
      }
    );
  }

  create():void{
    if(typeof(this.clase.materia)==="string"){
      if(this.clase.materia){
    this.clasesservice.create(this.clase).subscribe(
      res=>this.router.navigate(['/main'])
    )}else{
      alert("Porfavor introduce una materia")}
    }else{
    alert("La materia no puede ser un numero")
    }
  }

  update():void{
    this.clasesservice.update(this.clase).subscribe(
      e=>this.router.navigate(['/main'])
    )
  }

  delete(Clase:Clases):void{
    this.clasesservice.delete(Clase.id).subscribe(
      res=>this.clasesservice.getAll().subscribe(
        Response=>this.clases=Response
      )
    );
  }

}
